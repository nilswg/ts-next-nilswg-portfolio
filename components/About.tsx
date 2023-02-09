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
    <p className="animate-fadeIn animate-delay-[1s]">
      Proficient in using <b>TypeScript</b> as the development language, and{' '}
      <b>React.js</b> as the frontend framework to construct the appearance of
      the web application.
    </p>{' '}
    <p className="animate-fadeIn animate-delay-[2s]">
      For the backend, he uses <b>Node.js</b> and <b>Express.js</b> to build the
      web server, which solves the I/O intensive tasks and performance
      bottlenecks caused by high concurrency.
    </p>{' '}
    <p className="animate-fadeIn animate-delay-[3s]">
      For the database system, he uses <b>Redis</b> for high-performance caching
      and real-time streaming, and uses <b>PostgreSQL</b> and <b>MongoDB</b> for
      high availability data access and retrieval.
    </p>
  </>
)

const ChTexts = () => (
  <>
    <p className="animate-fadeIn">
      本身執行力強，熱衷於學習新技術並勇於接受挑戰。
    </p>{' '}
    <p className="animate-fadeIn animate-delay-[1s]">
      熟悉以 <b>TypeScript</b> 為開發語言，並使用 <b>React.js</b> 為前端框架構建
      Web 應用程序的外觀。
    </p>{' '}
    <p className="animate-fadeIn animate-delay-[2s]">
      至於後端技術，熟習使用 <b>Node.js</b> 環境和 <b>Express.js</b> 框架構建
      Web 服務器，解決I/O密集型任務和由高並發帶來的性能瓶頸。
    </p>{' '}
    <p className="animate-fadeIn animate-delay-[3s]">
      對於數據庫系統，使用 <b>Redis</b> 實作高性能快取與實時串流服務，並以{' '}
      <b>PostgreSQL</b> 與 <b>MongoDB</b>{' '}
      提供高可用性，對各種結構的資料存取和檢索。
    </p>
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
