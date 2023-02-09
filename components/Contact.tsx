import { useStores } from '@/stores'
import { useContactStore } from '@/stores/contact'
import { useToastsStore } from '@/stores/toasts'
import { ReactNode, useCallback } from 'react'
import ContactButton from './ContactButton'
import ContactTopics from './ContactTopics'
import SectionText from './SectionText'
import SectionTitle from './SectionTitle'

const EnTexts = () => (
  <p className="animate-fadeIn animate-delay-[0]">
    Currently, I'm looking for a <b>full-stack developer</b> position,&nbsp;
    <b>remote preferred</b>. Always up for new challenges and enjoy working with
    companies or people who share my passion for innovation and creativity.
    Also, if you have other question or request, don't hesitate to contact me
    using the form here!
  </p>
)

const ChTexts = () => (
  <p className="animate-fadeIn animate-delay-[0]">
    目前我正在尋求 <b>前端工程師</b> 的職位，更偏好<b>遠端工作</b>。{' '}
    自身喜歡有挑戰性的工作內容，很期待能跟擁有熱情與創造力的公司或是團隊一起共事。{' '}
    還有其他疑問或是需求，也別猶豫歡迎用這邊的表格聯繫我吧!
  </p>
)

const LeftSectionTexts = () => {
  const lang = useStores((state) => state.lang)
  return <SectionText>{lang === 'en' ? <EnTexts /> : <ChTexts />}</SectionText>
}

const FormFields = () => {
  const lang = useStores((state) => state.lang)
  const fontStyle = lang === 'en' ? 'font-outfit' : 'font-zhtw'
  return (
    <ul className={`flex flex-col gap-8 py-8 ${fontStyle} text-sm sm:text-lg`}>
      <li className="flex flex-row gap-2">
        <div className="relative mr-2 w-full">
          <input
            type="text"
            name="name"
            className="peer h-14 w-full rounded-md border-2 border-sky-600 bg-transparent px-4 py-2 text-sky-400 placeholder-transparent outline-none placeholder-shown:text-gray-400"
            placeholder={'Name'}
            minLength={3}
            required
          />
          <label
            className="pointer-events-none absolute left-4 top-0 translate-y-[-50%] bg-myblack px-1 text-base text-sky-600 duration-300 peer-placeholder-shown:top-[50%] peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-base"
          >
            {lang === 'en' ? 'Name' : '姓名'}
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name="email"
            className="peer h-14 w-full rounded-md border-2 border-sky-600 bg-transparent px-4 py-6 text-sky-400 placeholder-transparent outline-none placeholder-shown:text-gray-400"
            placeholder={'Email'}
            minLength={8}
            required
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-4 top-0 translate-y-[-50%] bg-myblack px-1 text-base text-sky-600 duration-300 peer-placeholder-shown:top-[50%] peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-base"
          >
            {lang === 'en' ? 'Email' : '電子郵件'}
          </label>
        </div>
      </li>
      <li>
        <ContactTopics />
      </li>
      <li>
        <div className="relative w-full">
          <textarea
            name="message"
            className="peer h-28 w-full rounded-md border-2 border-sky-600 bg-transparent px-4 py-4 text-sky-400 placeholder-transparent outline-none placeholder-shown:text-gray-400 xs:h-32 sm:h-40"
            placeholder={'Message'}
            minLength={10}
            required
          ></textarea>
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-4 top-0 translate-y-[-50%] bg-myblack px-1 text-base text-sky-600 duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-base"
          >
            {lang === 'en' ? 'Message' : '訊息'}
          </label>
        </div>
      </li>
      <li className="self-center sm:self-end">
        <ContactButton />
      </li>
    </ul>
  )
}

const dict: {
  en: { [index: string]: string }
  ch: { [index: string]: string }
} = {
  en: {
    topic_invalid_enum_value: 'Choose a topic',
    email_invalid_string: 'Invalid Email Address',
    name_invalid_string: 'Invalid Name',
    message_invalid_string: 'Invalid Message',
    email_too_small: 'Email address too short',
    name_too_small: 'Name too short',
    message_too_small: 'Message too short',
    server_error: 'Internal Server Error',
    success: 'Your email has been sent successfully!',
    error: 'Sending email failed',
  },
  ch: {
    topic_invalid_enum_value: '請選擇一下主題',
    email_invalid_string: '無效的電子郵件地址',
    name_invalid_string: '無效的姓名',
    message_invalid_string: '無效的訊息留言',
    email_too_small: '電子郵件地址過短',
    name_too_small: '名稱過短',
    message_too_small: '訊息過短',
    server_error: '伺服器狀態異常',
    success: '你的信件已順利寄出!',
    error: '信件寄送失敗',
  },
}

const FormFrame = ({ children }: { children: ReactNode }) => {
  const lang = useStores((state) => state.lang)
  const setLoading = useContactStore((state) => state.setLoading)
  const addToast = useToastsStore((state) => state.addToast)
  const onSubmit = useCallback(
    async (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()

      const elements = e.target as typeof e.target & {
        email: { value: string }
        message: { value: string }
        name: { value: string }
        topic: { value: string }
      }

      const json = {
        email: elements.email.value,
        message: elements.message.value,
        name: elements.name.value,
        topic: elements.topic.value,
      }

      setLoading(true)

      try {
        const data: { message: string; errors: string } = await fetch(
          '/api/message',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(json),
          }
        ).then((data) => data.json())

        /**
         * 伺服器回報錯誤，顯示該錯誤
         */
        if (data.errors) {
          if (data.errors in dict[lang]) {
            console.log('[ZodError]', data.errors)
            addToast({ type: 'warn', text: dict[lang][data.errors] })
          } else {
            console.log('[ServerError]', data.errors)
            addToast({ type: 'error', text: dict[lang]['error'] })
          }
          setLoading(false)
          return
        }

        /**
         * 正確訊息
         */
        if (data.message === 'ok') {
          addToast({ type: 'success', text: dict[lang].success })
          setLoading(false)
          return
        }

        /**
         * 例外狀況
         */
        throw new Error('exception')
      } catch (error: any) {
        /**
         * 處理前台語法錯誤
         */
        console.log('[ERROR]', error.message)
        addToast({ type: 'error', text: dict[lang].error })
        setLoading(false)
      }
    },
    [setLoading, lang]
  )

  return (
    <div className="flex w-full flex-col items-center self-center">
      <form className="w-full max-w-4xl px-9" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  )
}

const VerticalFrame = ({ children }: { children: ReactNode }) => (
  <div className="2xl:flex 2xl:w-2/5 2xl:justify-end">
    <div className="w-full max-w-3xl">{children}</div>
  </div>
)

const Contact = () => (
  <section
    id="contact"
    className={`w-full bg-myblack py-[var(--navbar-height)]`}
  >
    <VerticalFrame>
      <SectionTitle text={'Contact'} />
      <LeftSectionTexts />
      <h1 className="tags pl-6">{'<form>'}</h1>
    </VerticalFrame>
    <FormFrame>
      <FormFields />
    </FormFrame>
    <VerticalFrame>
      <h1 className="tags pl-6">{'</form>'}</h1>
    </VerticalFrame>
  </section>
)

export default Contact
