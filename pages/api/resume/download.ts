import { createReadStream } from 'fs'
import { stat } from 'fs/promises'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  errors?: string
  message?: string
}

const auth = process.env['RESUME_DOWNLOAD_PASSWORD']

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { locale = null, password = null } = req.query
  if (!locale || Array.isArray(locale)) {
    res.status(400).json({ errors: 'locale_invalid_string' })
    return
  }

  if (!password || Array.isArray(password)) {
    res.status(400).json({ errors: 'password_invalid_string' })
    return
  }

  if (password !== auth) {
    res.status(400).json({ errors: 'wrong_password' })
    return
  }

  const lang = locale === 'zh-TW' ? 'ch' : 'en'

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
    res
      .status(500)
      .json({ message: 'Sending resume failed', errors: 'server_error' })
  }
}

function hasMessage(e: unknown): e is { message: string } {
  if (e instanceof Object && 'message' in e) {
    return true
  } else {
    return false
  }
}
