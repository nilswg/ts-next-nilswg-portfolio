import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useCallback, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { MdAirplay } from 'react-icons/md'
import IntersectionLine from './IntersectionLine'
import ProjectTag from './ProjectTag'

type Props = {
  tags: string[]
  title: string
  description: string
  demo: string
  github: string
  preview: string
}

const ProjectCard = ({
  tags,
  title,
  description,
  demo,
  github,
  preview,
}: Props) => (
  <FlipAnimation>
    <div className="max-w-sm rounded-lg bg-white shadow-lg">
      <div className="flex flex-col justify-center">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <div className="relative h-[10.5rem] w-full xs:h-[14rem] sm:h-[18rem] lg:h-[16rem]">
            <Image
              className="rounded-t-lg"
              src={preview}
              alt={`preview image of ${title}`}
              fill
            />
          </div>
        </a>
        <div className="relative">
          <Link href={github} className="absolute -top-5 right-[0.75rem]">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl shadow-lg">
              {' '}
              <AiFillGithub />{' '}
            </span>
          </Link>
          <Link href={demo} className="absolute -top-5 right-[4.5rem]">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl shadow-lg">
              {' '}
              <MdAirplay />{' '}
            </span>
          </Link>
        </div>
        <div className="p-6">
          <div className="over h-[10rem] overflow-y-scroll">
            <p className="mt-5 break-words font-outfit text-4xl font-thin text-gray-900">
              {title}
            </p>
            <p className="mt-3 break-words px-1 sm:text-justify font-outfit text-base text-gray-700">
              {description}
            </p>
          </div>
          <div className="h-[6rem] overflow-hidden">
            <div className="mt-6 flex flex-wrap">
              {tags.map((tag, i) => (
                <ProjectTag key={`tag_${tag}`} text={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </FlipAnimation>
)

function FlipAnimation({ children }: { children: ReactNode }) {
  const [cardAnim, setCardAnim] = useState('animate-none')
  const handleIntersection = useCallback(
    (observer: IntersectionObserver, entry: IntersectionObserverEntry) => {
      const { top } = entry.boundingClientRect
      if (entry.isIntersecting) {
        setCardAnim('animate-flipInY')
      }
      /**
       * 從上方離開 top、bottom 會是負數；從下方離開 top、bottom 會是正數。
       * 我們希望觀察對象從畫面上方離開時不要觸發動畫效果。
       */
      if (!entry.isIntersecting && top > 0) {
        setCardAnim('animate-flipOutY')
      }
    },
    [setCardAnim]
  )
  return (
    <div>
      <IntersectionLine
        position={'top-[30%]'}
        fn={handleIntersection}
        options={{ threshold: 1 }}
      />
      <div className={cardAnim}>{children}</div>
    </div>
  )
}

export default ProjectCard
