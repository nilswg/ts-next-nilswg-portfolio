import Image from 'next/image'
import { ReactNode, useCallback, useState } from 'react'
import IntersectionLine from './IntersectionLine'

type Props = {
  id: string
  img: string
}
const SkillBox = ({ id, img }: Props) => {
  return (
    <FlipAnimation>
      <div className="group flex flex-col items-center justify-between space-y-2 rounded-lg border border-transparent p-4 transition-all duration-300 ease-in-out hover:border-gray-200 hover:shadow-sm sm:p-5">
        <Image
          className="rounded-md transition-transform ease-in-out group-hover:-translate-y-2"
          src={img}
          alt={`skill ${id} image`}
          width={64}
          height={64}
          loading="lazy"
        ></Image>
        <p className="text-center font-orbitron text-sm font-medium leading-tight tracking-widest  text-gray-400 opacity-100 transition-colors ease-in-out group-hover:text-gray-200 sm:text-base">
          {id}
        </p>
      </div>
    </FlipAnimation>
  )
}

function FlipAnimation({ children }: { children: ReactNode }) {
  const [cardAnim, setCardAnim] = useState('animate-none')

  const handleIntersection = useCallback(
    (observer: IntersectionObserver, entry: IntersectionObserverEntry) => {
      const { top } = entry.boundingClientRect
      if (entry.isIntersecting) {
        setCardAnim('animate-flipInX')
      }
      /**
       * 從上方離開 top、bottom 會是負數；從下方離開 top、bottom 會是正數。
       * 我們希望觀察對象從畫面上方離開時不要觸發動畫效果。
       */
      if (!entry.isIntersecting && top > 0) {
        setCardAnim('animate-flipOutX')
      }
    },
    [setCardAnim]
  )

  return (
    <div>
      <IntersectionLine
        // visible
        position={'top-[100%]'}
        fn={handleIntersection}
        options={{ threshold: 1 }}
      />
      <div className={cardAnim}>{children}</div>
    </div>
  )
}

export default SkillBox
