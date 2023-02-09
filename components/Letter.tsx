import useThrottle from '@/hooks/useThrottle'
import { useEffect, useRef, useState } from 'react'

type Props = {
  index: number
  text: string
}

const Letter = ({ index, text }: Props) => {
  const delayMS = 1000 + index * 100
  const ref = useRef<HTMLSpanElement | null>(null)
  const [className, setClassName] = useState(
    /*tw:*/ `animate-bounceIn animate-delay-[${index / 10}s]`
  )
  const letterAnimate = () => {
    setClassName(/*tw:*/ 'animate-[1s_both_rubberBand,_0.5s_reverse_sky400]')
    setTimeout(() => setClassName(/*tw:*/ 'animate-none'), 1000)
  }
  const letterAnimateThrottled = useThrottle(letterAnimate, 1000)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref?.current) {
        ref.current.addEventListener('pointerenter', letterAnimateThrottled)
      }
    }, delayMS)
    return () => {
      if (ref?.current) {
        ref.current.removeEventListener('pointerenter', letterAnimateThrottled)
      }
      clearTimeout(timer)
    }
  }, [])

  return (
    <span className={`inline-block min-w-[0.5rem] ${className}`} ref={ref}>
      {text}
    </span>
  )
}

export default Letter
