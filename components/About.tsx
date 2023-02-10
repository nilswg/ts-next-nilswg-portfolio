import AboutImage from '@/public/img/hero2.jpg'
import { useStores } from '@/stores'
import Image from 'next/image'
import SectionText from './SectionText'
import SectionTitle from './SectionTitle'

const EnTexts = () => (
  <>
    <p className="animate-fadeIn">
      <b>Nilson Weng</b> is a man of action. Passionate about new technologies
      and eager to take on challenges.
    </p>{' '}
  </>
)

const ChTexts = () => (
  <>
    <p className="animate-fadeIn">
      本身是個執行力很強的人，且熱衷於學習新技術並勇於接受挑戰。
    </p>{' '}
  </>
)

const LeftSectionTexts = () => {
  const lang = useStores((state) => state.lang)
  return <SectionText>{lang === 'en' ? <EnTexts /> : <ChTexts />}</SectionText>
}

const Left = () => (
  <div>
    <SectionTitle text={'About'} />
    <LeftSectionTexts />
  </div>
)

const About = () => (
  <section
    id="about"
    className={`mt-[var(--navbar-height)] w-full bg-myblack py-[var(--navbar-height)]`}
  >
    {/* <h1 className='absolute text-white text-lg'>{1}</h1> */}
    <div className="w-full 2xl:flex 2xl:flex-row 2xl:justify-center">
      <div className="2xl:flex 2xl:w-2/5 2xl:flex-row 2xl:justify-end">
        <div className="w-full max-w-3xl">
          <Left />
        </div>
      </div>
      <div className="2xl:w-3/5 2xl:pt-10 ">
        <h1 className="tags ml-6 2xl:ml-[25%]">{'<img src="me">'}</h1>
        <div className="flex justify-center px-9">
          <div className="max-w-md">
            <Image
              className="blob-mask"
              src={AboutImage}
              alt="about image"
              width={420}
            />
          </div>
        </div>
        <h1 className="tags ml-6 2xl:ml-[25%]">{'</img>'}</h1>
      </div>
    </div>
  </section>
)

export default About
