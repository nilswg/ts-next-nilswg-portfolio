import { useStores } from '@/stores'

const Options = [
  // { type: 'greet', en: 'Say hi to me!', ch: '安安' },
  { type: 'job', en: 'Job Invitation', ch: '工作邀約' },
  { type: 'suggest', en: 'Give me suggestion', ch: '給我建議' },
  { type: 'ask', en: 'Questions for me?', ch: '向我提問' },
  { type: 'other', en: 'Other', ch: '隨便聊聊' },
]

const ContactTopics = () => {
  const lang = useStores((state) => state.lang)
  return (
    <div className={`relative w-full`}>
      <select
        className="peer h-14 w-full rounded-md border-2 border-sky-600 bg-transparent px-4 py-2 text-sky-400 placeholder-transparent outline-none placeholder-shown:text-gray-400"
        name="topic"
        placeholder="Topic"
        required
        defaultValue={lang === 'en' ? 'Choose one' : '請選擇'}
      >
        <option disabled className="bg-myblack text-gray-400">
          {lang === 'en' ? 'Choose one' : '請選擇'}
        </option>
        {Options.map((option) => (
          <option
            key={option.type}
            value={option.type}
            className="bg-myblack text-sky-400"
          >
            {option[lang]}
          </option>
        ))}
      </select>
      <label
        htmlFor="topic"
        className="pointer-events-none absolute left-4 top-0 translate-y-[-50%] bg-myblack px-1 text-base text-sky-600 duration-300 peer-placeholder-shown:top-[50%] peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-base"
      >
        {lang === 'en' ? 'Topic' : '主題'}
      </label>
    </div>
  )
}

export default ContactTopics
