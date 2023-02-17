import { createReadStream } from 'fs'
import { stat } from 'fs/promises'
import moment from 'moment'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
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

  const lang = locale === 'zh-TW' ? 'ch' : 'en'
  const date = moment().utc().format('YYYY-MM-DD');

  console.log('Start Download Resume')
  // your file content here
  try {
    const resumeName = `resume_${lang}.pdf`
    const resumePath = `./public/pdf/${resumeName}`
    const readStream = await createReadStream(resumePath)
    const filestat = await stat(resumePath)

    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=${resumeName}`,
      'Content-Length': filestat.size,
    })
    await readStream.pipe(res)
    return
  } catch (error: unknown) {
    if (hasMessage(error)) {
      console.log(error.message)
    }
    res.status(400).json({ message: 'save file error.' })
  }
}

function hasMessage(e: unknown): e is { message: string } {
  if (e instanceof Object && 'message' in e) {
    return true
  } else {
    return false
  }
}
