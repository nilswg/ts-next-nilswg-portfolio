// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

type Data = {
  message: string | null
  errors: any
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    /**
     * 透過 Zod 驗證輸入的參數與格式是否正確
     */
    const result = messageSchema.safeParse(req.body)
    if (!result.success) {
      console.log('[ZOD ERROR]', JSON.stringify(result.error.issues))

      const firstIssue = result.error.issues[0]
      const zodErrStr = firstIssue.path[0] + '_' + firstIssue.code

      console.log('[ZOD ERROR] zodErrStr', zodErrStr)

      res.status(400).json({ message: null, errors: zodErrStr })
      return
    }

    const formData = createLineMessage(result.data)

    /**
     * Create Message to Line Notify API
     */
    const token = process.env['LINE_NOTIFY_TOKEN']
    const data = await fetch('https://notify-api.line.me/api/notify', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }).then((resp) => resp.json())

    if (data.status !== 200) {
      /**
       * Error Message From Line Notify API.
       */
      console.error('[LINE NOTIFY ERROR]:' + data.message)
      throw Error()
    }

    /**
     * Success Message From Line Notify API.
     */
    res.status(data.status).json({ message: data.message, errors: null })
  } catch (error: any) {
    console.error('[SERVER ERROR]:' + error.message)

    /**
     * 無論LINE NOTIFY API 錯誤，還是伺服器語法錯誤，皆報 500。
     */
    res.status(500).json({ message: null, errors: 'server_error' })
  }
}

const messageSchema = z.object({
  name: z.string().min(3),
  email: z.string().email().min(8),
  topic: z.enum(['suggest', 'ask', 'job', 'other']),
  message: z.string().min(10),
})

type MessageProps = z.infer<typeof messageSchema>

function createLineMessage(data: MessageProps) {
  const res = `\
【${data.topic}】
[名稱]: ${data.name}
[信箱]: ${data.email}
------------------訊息------------------
 ${data.message}
`

  const formData = new FormData()
  formData.append('message', res)
  return formData
}
