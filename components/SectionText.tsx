import { useStores } from '@/stores'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const SectionText = ({ children }: Props) => {
  const lang = useStores((state) => state.lang)
  const fontStyle = lang === 'en' ? 'font-outfit' : 'font-zhtw'
  return (
    <>
      <h1 className="tags ml-6">{'<p>'}</h1>
      <div
        className={`mx-9 my-1 ${fontStyle} sm:text-justify text-sm tracking-widest text-gray-400 sm:text-base flex flex-col gap-2`}
      >
        {children}
      </div>
      <h1 className="tags ml-6 mb-1">{'</p>'}</h1>
    </>
  )
}

export default SectionText
