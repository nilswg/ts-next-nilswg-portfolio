import AboutImage from '@/public/img/hero2.jpg'
import { useStores } from '@/stores'
import Image from 'next/image'
import SectionText from './SectionText'
import SectionTitle from './SectionTitle'

const EnTexts = () => (
  <>
    <p className="animate-fadeIn">
      I am a motivated and skilled <b>full-stack web developer</b> with{' '}
      <b>2.5 years</b> of development experience.
    </p>
    <p>
      <b>Typescript</b> is a language that I always use and promote throughout
      my work. In the past, I used it with <b>Pixi.js</b> and <b>Babylon.js</b>{' '}
      to create <b>2D canvas animations</b> and <b>3D WebGL</b> animations, and
      I completed <b>six</b> casino games in total. Also, I have used it to work
      with a team of <b> more than 20</b> people to build large-scale business
      ERP systems using <b>Angular</b> as the front-end framework. Even in my
      spare time, I enjoy using it with <b>Node.js</b>, <b>React</b>,{' '}
      <b>Express</b>, <b>Vite</b>, etc. to explore cutting-edge web
      technologies. My personal website was also built with it using{' '}
      <b>Next.js</b>.
    </p>
    <p>
      I am a self-taught expert and like to share what I have learned. For
      example, in previous work, I shared new dev tools with colleagues, such as{' '}
      <b>Prettier</b>, to improve the quality and readability of code. In
      addition, in my personal Discord group, I often serve as the main speaker,
      and I've already helped <b>two</b> group members get jobs as front-end
      developers.
    </p>
  </>
)

const ChTexts = () => (
  <>
    <p className="animate-fadeIn">
      我是一名充滿熱情且技術嫻熟的<b>全端工程師</b>，目前擁有 <b>2.5 年</b>{' '}
      的開發經驗。
    </p>{' '}
    <p>
      <b>Typescript</b> 是我職涯中一直使用且推廣的語言。我曾使用它配合{' '}
      <b>Pixi.js</b> 和 <b>Babylon.js</b> 製作 <b>2D canvas 動畫</b> 與{' '}
      <b>3D Webgl</b> 動畫，並完成共 <b>6</b> 個博弈遊戲。我也曾參與過{' '}
      <b>20人以上</b>的開發團隊，以 <b>Angular</b>{' '}
      作為前端框架，構建大型的商業ERP系統。 個人空閒之餘，也喜歡使用它搭配{' '}
      <b>Node.js</b>、<b>React</b>、<b>Express</b>、<b>Vite</b>{' '}
      來研究最新的網頁技術，如我的個人網站，也是使用它與 <b>Next.js</b> 來完成。
    </p>
    <p>
      我本是一個行動能力強，熱衷學習各種技術知識，但在正式工作後，我領悟到不斷自我精進的同時，{' '}
      也要將所學到的知識分享給他人。例如，在之前工作中分享新的技術工具給團隊成員，如
      <b>Prettier</b> 來提高代碼的品質與可讀性。此外，在我的 Discord
      群組中，我時常擔任主要的技術分享者，目前也幫助群中 <b>2</b>{' '}
      位成員取得前端工程師的工作。
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
