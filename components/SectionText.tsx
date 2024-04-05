import { useI18n } from './useI18n'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const SectionText = ({ children }: Props) => {
  const { i18n } = useI18n()
  const fontStyle = i18n.language === 'zh-TW' ? 'font-zhtw' : 'font-outfit'
  return (
    <>
      <h1 className="tags ml-6">{'<p>'}</h1>
      <div
        className={`mx-9 my-1 ${fontStyle} flex flex-col gap-2 text-sm tracking-widest text-gray-400 sm:text-justify sm:text-base`}
      >
        {children}
      </div>
      <h1 className="tags ml-6 mb-1">{'</p>'}</h1>
    </>
  )
}

export default SectionText
