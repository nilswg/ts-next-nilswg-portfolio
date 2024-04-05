import { useAnimationsFn } from '@/hooks/useAnimations'
import { useDelayEffect } from '@/hooks/useDelay'
import { useThrottleFn } from '@/hooks/useThrottle'
import { useEffect, useRef, useState } from 'react'

type Props = {
  index: number
  text: string
}

const Letter = ({ index, text }: Props) => {
  const delayMS = 1000 + index * 100
  const [enable, setEnable] = useState(false)
  const ref = useRef<HTMLSpanElement | null>(null)

  /* 設置初始動畫 */
  const [className, setClassName] = useState(/*tw:*/ `animate-bounceIn`)

  /* 因為字母有初始動畫，必須等初始動畫播完才接受觸發 */
  useDelayEffect(() => setEnable(true), delayMS, [])

  /**
   * 懸停時觸發動畫效果，動畫播畢後，即一秒後退回原始狀態
   * 其中使用 Throttle，避免動畫被多次觸發。
   */
  const [letterAnimate, clearLetterAnimate] = useAnimationsFn(
    [
      { show: () => setClassName(/*tw:*/ 'animate-[1s_both_rubberBand,_0.5s_reverse_sky400]'), delay: 0 },
      { show: () => setClassName(/*tw:*/ 'animate-none'), delay: 1000 },
    ],
    [setClassName]
  )

  const letterAnimateThrottled = useThrottleFn(letterAnimate, 1000, [])

  useEffect(() => {
    /* 等初始動畫播完才接受觸發 */
    if (enable && ref.current) {
      ref.current.addEventListener('pointerenter', letterAnimateThrottled)
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('pointerenter', letterAnimateThrottled)
      }
      clearLetterAnimate()
    }
  }, [enable, ref.current, setClassName])

  return (
    <span className={`inline-block min-w-[0.5rem] ${className}`} ref={ref} style={{ animationDelay: `${index / 10}s` }}>
      {text}
    </span>
  )
}

export default Letter
