import useThrottle from '@/hooks/useThrottle'
import { useEffect, useRef, useState } from 'react'

type Props = {
  index: number
  text: string
}

const Letter = ({ index, text }: Props) => {
  const delayMS = 1000 + index * 100
  const ref = useRef<HTMLSpanElement | null>(null)

  /* 設置初始動畫 */
  const [className, setClassName] = useState(
    /*tw:*/ `animate-bounceIn animate-delay-[${index / 10}s]`
  )

  /**
   * 懸停時觸發動畫效果，動畫播畢後，即一秒後退回原始狀態
   * 其中使用 Throttle 避免動畫被多次觸發
   */
  const letterAnimate = () => {
    setClassName(/*tw:*/ 'animate-[1s_both_rubberBand,_0.5s_reverse_sky400]')
    setTimeout(() => setClassName(/*tw:*/ 'animate-none'), 1000)
  }
  const letterAnimateThrottled = useThrottle(letterAnimate, 1000)

  useEffect(() => {
    /* 因為字母有初始動畫，必須等初始動畫播完才接受觸發 */
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
