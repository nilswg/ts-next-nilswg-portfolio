import getJobDate from '@/lib/getJobDate'
import getJobTenure from '@/lib/getJobTenure'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { useState } from 'react'

type ExperienceProps = {
  id: string
  img: string
  company: string
  jobtitle: string
  jobposition: string
  location: string
  begintime: number[]
  endtime: number[]
  texts: string[]
}

const ExperiencesTimelineTexts = () => {
  const home = useTranslation('home')
  const common = useTranslation('common')
  const lang = common.t('lang')
  const fontStyles = common.t('fontStyles')
  const experiences = home.t('experience-timeline', {
    returnObjects: true,
  }) as ExperienceProps[]

  const [select, setSelect] = useState<HTMLInputElement | null>(null)

  const selectInput = (p: React.MouseEvent<HTMLInputElement>) =>
    setSelect(p.currentTarget)

  const removeSelectInput = (p: React.MouseEvent<HTMLDivElement>) => {
    if (select && select.checked === true) {
      select.checked = false
      setSelect(null)
    }
  }

  return (
    <div
      className="flex w-full flex-col items-center pl-6 pr-3 md:pl-56"
      onClick={removeSelectInput}
    >
      <ul
        id="timeline"
        className="list-none border-l-8 border-l-sky-800 pl-8 text-white"
      >
        {experiences.map((e, i) => (
          <li key={e.id} className="relative my-20">
            <input
              id={e.id}
              type="radio"
              name="experiences"
              className="hidden"
              onClick={selectInput}
            />
            <div
              id="circle"
              className="absolute top-[50%] -ml-[3.55rem] h-10 w-10 translate-y-[-50%] rounded-full border-[5px] border-sky-800 bg-myblack md:-ml-[3.6rem]"
            >
              <Image
                className="rounded-full"
                src={e.img}
                alt={`image of ${e.company}`}
                height={60}
                width={60}
              />
            </div>
            <p
              id="date"
              className={`pointer-events-none absolute top-[-3rem] cursor-none ${fontStyles} text-base tracking-wider text-sky-600 md:absolute md:top-[50%] md:-left-[18rem] md:-mt-6 md:w-[13rem] md:px-0 md:text-right`}
            >
              {getJobDate(e.begintime, lang)} - {getJobDate(e.endtime, lang)}
            </p>
            <p
              id="job-tenure"
              className={`pointer-events-none absolute top-[-1.5rem] cursor-none ${fontStyles} text-base tracking-wider text-sky-600 md:absolute md:top-[50%] md:-left-[18rem] md:mt-0 md:w-[13rem] md:px-0 md:text-right`}
            >
              {getJobTenure(e.begintime, e.endtime, lang)}
            </p>
            <label htmlFor={e.id} className="experience-box">
              <h1
                id="company"
                className="pointer-events-none mt-1 px-3 font-russon text-xl transition-transform duration-200 sm:text-xl"
              >
                {e.jobtitle}
              </h1>
              <h2
                id="jobtitle"
                className="pointer-events-none mt-2 px-3 font-play text-base text-white xs:text-base sm:text-lg"
              >
                {e.company}, {e.jobposition}
              </h2>
              {e.texts.map((text, i) => (
                <p
                  key={i}
                  className={`my-2 hidden overflow-hidden px-4  text-justify ${fontStyles} text-sm sm:text-base lg:text-lg`}
                >
                  <span className="inline-block">-&nbsp;</span>
                  <span className="inline-block" key={i}>
                    {text}
                  </span>
                </p>
              ))}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

const ExperiencesTimeline = () => {
  return <ExperiencesTimelineTexts />
}

export default ExperiencesTimeline
