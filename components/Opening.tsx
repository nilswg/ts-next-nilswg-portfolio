import Typewriter from 'typewriter-effect'
import LettersZone from './LettersZone'
import OpeningButton from './OpeningButton'
import SocialLinks from './SocialLinks'

const Opening = () => {
  return (
    <section className="opening-bg-image flex h-[calc(100vh-10rem)] flex-col items-center justify-between">
      <div className="container flex h-full w-full flex-row items-center justify-between 2xl:w-3/4">
        <img src="" alt="" />
        <div>
          <h1 className="tags ml-6 animate-fadeIn animate-delay-[3s] ">
            {'<h1>'}
          </h1>
          <LettersZone
            key="letters_hi"
            className="ml-9 inline-block font-russon text-xl font-normal text-white xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            letters={'Hi, '}
            startIdx={30}
          />
          <br />
          <LettersZone
            key="letters_username"
            className="ml-9 inline-block font-russon text-xl font-normal text-white xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            letters="I'm Nilson Weng,"
            startIdx={35}
          />
          <br />
          <LettersZone
            key="letters_jobtitle"
            className="ml-9 inline-block font-russon text-xl font-normal text-white xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            letters="full-stack developer."
            startIdx={50}
          />
          <h1 className="tags ml-6 inline animate-fadeIn  animate-delay-[3s] xs:ml-3">
            {'</h1>'}
          </h1>
          <h1 className="tags ml-6 animate-fadeIn animate-delay-[3s] ">
            {'<p>'}
          </h1>
          <div className="ml-9 font-orbitron text-xs tracking-widest text-gray-400 sm:text-lg md:text-2xl">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(7500)
                  .typeString('Proficient in TypeScript')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Specialized in Node.js, React')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('MERN Stack Developer')
                  .pauseFor(1000)
                  .deleteAll()
                  .start()
              }}
            />
          </div>
          <h1 className="tags ml-6 animate-fadeIn animate-delay-[3s] ">
            {'</p>'}
          </h1>
        </div>
        <div>
          <div className="mr-4 hidden sm:block">
            <SocialLinks className="flex flex-col gap-5 py-2 px-0 text-5xl text-white opacity-60" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6">
        <OpeningButton delayMS={6000} />
      </div>
    </section>
  )
}

export default Opening
