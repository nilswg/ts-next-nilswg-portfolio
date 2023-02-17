import delay from '@/lib/delay'
import { useEffect, useState } from 'react'
import { CgChevronDown } from 'react-icons/cg'

type ButtonProps = {
  delayMS: number
  text: string
}

const OpeningButton = ({ delayMS, text }: ButtonProps) => {
  const [className, setClassName] = useState('opacity-0')

  useEffect(() => {
    ;(async () => {
      await delay(delayMS, () => setClassName('opacity-1 animate-fadeIn'))
      await delay(1000, () => setClassName('opacity-1 animate-rubberBand'))
      await delay(1000, () => setClassName('opacity-1 animate-none'))
    })()
  }, [])

  return (
    <a href={'#about'} className={`flat-btn ${className} group`}>
      {text}
      <span
        className={`ml-2 inline-block align-text-top text-lg group-hover:animate-[3s_both_shakeY_infinite] sm:text-xl`}
      >
        <CgChevronDown />
      </span>
    </a>
  )
}

export default OpeningButton
