// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { unlink } from 'fs/promises'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  locale?: string
}

const password = process.env['RESUME_DOWNLOAD_PASSWORD']

/**
 * 使用方式 (僅能於開發模式中使用)
 *
 * 如果是 WSL 要確保開啟 VcXsrv
 *
 * ex: http://localhost:3000/api/resume/create?locale=zh-TW
 * ex: http://localhost:3000/api/resume/create?locale=en
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { locale = null } = req.query
  if (!locale || Array.isArray(locale)) {
    res.status(400).json({ message: 'wrong of no locale provided' })
    return
  }

  const baseUrl = getBaseUrl(req)
  console.log('baseUrl', baseUrl)

  const lang = locale === 'zh-TW' ? 'ch' : 'en'
  const url = `${baseUrl}/${locale}/resume/print`
  const filename = `./public/pdf/resume_${lang}.pdf`

  console.log('req.query:>>', req.query)
  console.log('lang:>>', lang)

  if (lang === 'en' || lang === 'ch') {
    try {
      const { genPDF } = (await import('@/puppeteer/genPDF'))

      const { encrypt } = await import('@/puppeteer/qpdf')

      if (!password) {
        res.status(400).json({ message: 'password is empty' })
        return
      }
      const tempPDF = filename.split('.pdf')[0] + '_temp'
      await genPDF(url, tempPDF)
      await encrypt(tempPDF, filename, password!)
      await unlink(tempPDF) // 刪除 tempPDF

      res.status(200).json({ message: 'Resume created successfully.', locale })
    } catch (error) {
      if (hasMessage(error)) {
        console.log(error.message)
      }
      res.status(400).json({ message: 'Resume created failed.' })
    }
  } else {
    res.status(400).json({ message: 'Resume created failed.' })
  }
}

function getBaseUrl(req: any) {
  if (process.env.NODE_ENV === 'production') {
    // if you are hosting a http website use http instead of https
    return `https://${req.headers.host}`
  } else {
    return `http://${req.headers.host}`
  }
}

function hasMessage(e: unknown): e is { message: string } {
  if (e instanceof Object && 'message' in e) {
    return true
  } else {
    return false
  }
}
