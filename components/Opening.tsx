import { useTranslation } from 'next-i18next'
import { useCallback } from 'react'
import Typewriter from 'typewriter-effect'
import LettersZone from './LettersZone'
import OpeningButton from './OpeningButton'
import SocialLinks from './SocialLinks'

const Opening = () => {
  const { t } = useTranslation('home')
  const letters = t('openings.letters', { returnObjects: true }) as string[]
  const typewriter = t('openings.typewriter', {
    returnObjects: true,
  }) as string[]

  /**
   * 強迫 Typewriter 於語系切換時刷新
   */
  const MyTypeWriter = useCallback(
    () => (
      <Typewriter
        options={{ loop: true }}
        onInit={(w) => {
          w.pauseFor(6000)
            .typeString(typewriter[0])
            .pauseFor(1000)
            .deleteAll()
            .typeString(typewriter[1])
            .pauseFor(1000)
            .deleteAll()
            .typeString(typewriter[2])
            .pauseFor(1000)
            .deleteAll()
            .start()
        }}
      />
    ),
    [typewriter]
  )

  return (
    <section className="opening-bg-image flex h-[calc(100vh-10rem)] flex-col items-center justify-between">
      <div className="container flex h-full w-full flex-row items-center justify-between 2xl:w-3/4">
        {/* <div className=' bg-red-400'/> */}
        <div className=" flex w-full justify-center">
          <div>
            <h1 className="tags ml-6 animate-fadeIn animate-delay-[3s] ">
              {'<h1>'}
            </h1>
            <LettersZone
              key="letters_hi"
              className="ml-9 inline-block font-russon text-xl font-normal text-white xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              letters={letters[0]}
              startIdx={20}
            />
            <br />
            <LettersZone
              key="letters_username"
              className="ml-9 inline-block font-russon text-xl font-normal text-white xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              letters={letters[1]}
              startIdx={25}
            />
            <br />
            <LettersZone
              key="letters_jobtitle"
              className="ml-9 inline-block font-russon text-xl font-normal text-white xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              letters={letters[2]}
              startIdx={40}
            />
            <h1 className="tags ml-6 inline animate-fadeIn  animate-delay-[3s] xs:ml-3">
              {'</h1>'}
            </h1>
            <h1 className="tags ml-6 animate-fadeIn animate-delay-[3s] ">
              {'<p>'}
            </h1>
            <div className="ml-9 font-orbitron text-xs tracking-widest text-gray-400 sm:text-lg md:text-2xl">
              <MyTypeWriter />
            </div>
            <h1 className="tags ml-6 animate-fadeIn animate-delay-[3s] ">
              {'</p>'}
            </h1>
          </div>
        </div>
        <div>
          <div className="mr-4 hidden sm:block">
            <SocialLinks className="flex flex-col gap-5 py-2 px-0 text-5xl text-white opacity-60" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6">
        <OpeningButton
          delayMS={6000}
          text={t('openings.learnmore', { defaultValue: 'LEARN MORE' })}
        />
      </div>
    </section>
  )
}

export default Opening
