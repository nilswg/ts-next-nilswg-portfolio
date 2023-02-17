// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  locale?:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { locale = null } = req.query
  if (!locale || Array.isArray(locale)) {
    res.status(400).json({ message: 'wrong of no locale provided' })
    return
  }

  /**
   * ex: api/resume?lang=ch
   */
  const baseUrl = getBaseUrl(req)
  console.log('baseUrl', baseUrl)

  const lang = locale === 'zh-TW' ? 'ch' : 'en'
  const url = `${baseUrl}/${locale}/resume/print`
  const filename = `./public/pdf/resume_${lang}.pdf`

  console.log('lang', req.query)

  if (lang === 'en' || lang === 'ch') {
    try {
      const genPDF = (await import('@/puppeteer/genPDF')).default

      await genPDF(url, filename)

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
