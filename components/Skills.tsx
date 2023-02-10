import { useStores } from '@/stores'
import SectionText from './SectionText'
import SectionTitle from './SectionTitle'
import SkillBox from './SkillBox'

const mySkills = [
  { id: 'TypeScript', img: '/img/skills/TypeScript.svg' },
  { id: 'JavaScript', img: '/img/skills/JavaScript.svg' },
  { id: 'React', img: '/img/skills/React-Dark.svg' },
  { id: 'Next.js', img: '/img/skills/NextJS-Dark.svg' },
  { id: 'Redux', img: '/img/skills/Redux.svg' },
  { id: 'Node.js', img: '/img/skills/nodejs-dark.svg' },
  { id: 'Express', img: '/img/skills/expressjs.png' },
  { id: 'Deno', img: '/img/skills/deno-dark.svg' },
  { id: 'HTML', img: '/img/skills/HTML.svg' },
  { id: 'CSS', img: '/img/skills/CSS.svg' },
  { id: 'Angular', img: '/img/skills/Angular-Dark.svg' },
  { id: 'RxJS', img: '/img/skills/rxjs.png' },
  { id: 'Pug', img: '/img/skills/pug-dark.svg' },
  { id: 'Tailwind', img: '/img/skills/tailwind.png' },
  { id: 'Sass', img: '/img/skills/sass.png' },
  { id: 'Styled\nComponents', img: '/img/skills/styled-components.svg' },
  { id: 'BabylonJS', img: '/img/skills/babylon.png' },
  { id: 'PixiJS', img: '/img/skills/pixijs.png' },
  { id: 'GreenSock', img: '/img/skills/greensock.png' },
  { id: 'Redis', img: '/img/skills/redis.png' },
  { id: 'MongoDB', img: '/img/skills/mongodb.png' },
  { id: 'PostgreSQL', img: '/img/skills/PostgreSQL.png' },
  { id: 'Docker', img: '/img/skills/Docker.svg' },
  { id: 'Linux', img: '/img/skills/Linux-Dark.svg' },
  { id: 'Bash', img: '/img/skills/Bash-Dark.svg' },
  { id: 'NeoVim', img: '/img/skills/NeoVim-Dark.svg' },
  { id: 'Git', img: '/img/skills/Git.svg' },
  { id: 'NPM', img: '/img/skills/npm.png' },
  { id: 'Webpack', img: '/img/skills/webpack-dark.svg' },
  { id: 'Rollup', img: '/img/skills/rollup-dark.svg' },
  { id: 'Vite', img: '/img/skills/vite-dark.svg' },
  { id: 'Prettier', img: '/img/skills/prettier.png' },
  { id: 'C', img: '/img/skills/clang.svg' },
  { id: 'Python', img: '/img/skills/Python-Dark.svg' },
  { id: 'Golang', img: '/img/skills/golang.svg' },
  { id: 'Rust', img: '/img/skills/rust.svg' },
]

const EnTexts = () => (
  <>
    <p className="animate-fadeIn">
      Proficient in <b>TypeScript</b>, and use <b>React.js</b>, <b>Next.js</b>{' '}
      to create web application.
    </p>{' '}
    <p className="animate-fadeIn animate-delay-[1s]">
      For the backend, specialize in <b>Node.js</b> and <b>Express.js</b> to
      build the <b>Web</b> server, which solves the I/O intensive tasks and
      performance bottlenecks caused by high concurrency.
    </p>{' '}
    <p className="animate-fadeIn animate-delay-[2s]">
      For the database system, using <b>Redis</b> for high-performance caching
      and real-time streaming, as well as <b>PostgreSQL</b> and <b>MongoDB</b>{' '}
      for high availability data access and retrieval.
    </p>
  </>
)

const ChTexts = () => (
  <>
    <p className="animate-fadeIn">
      精通 <b>TypeScript</b> ，並熟悉以 <b>React.js</b> 與 <b>Next.js</b> 構建
      Web 應用。
    </p>{' '}
    <p className="animate-fadeIn animate-delay-[1s]">
      後端技術，熟悉 <b>Node.js</b> 的運行環境，以 <b>Express.js</b> 構建
      Web 服務器，解決I/O密集型任務和由高並發帶來的性能瓶頸。
    </p>{' '}
    <p className="animate-fadeIn animate-delay-[2s]">
      數據庫系統，使用過 <b>Redis</b> 實作高性能快取與實時串流服務，並以{' '}
      <b>PostgreSQL</b> 與 <b>MongoDB</b>{' '}
      提供高可用性，對各種結構的資料存取和檢索。
    </p>
  </>
)

const LeftSectionTexts = () => {
  const lang = useStores((state) => state.lang)
  return <SectionText>{lang === 'en' ? <EnTexts /> : <ChTexts />}</SectionText>
}

const SkillsBoard = () => (
  <div className="container mx-auto max-w-3xl xl:max-w-5xl 2xl:max-w-full">
    <div className="grid grid-cols-2 gap-4 py-5 px-6 sm:grid-cols-4 sm:gap-5 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
      {mySkills.map((item) => (
        <SkillBox key={`skill_${item.id}`} id={item.id} img={item.img} />
      ))}
    </div>
  </div>
)

const Skills = () => (
  <section id="skills" className="w-full bg-myblack py-[var(--navbar-height)]">
    {/* <h1 className="absolute text-lg text-white">{3}</h1> */}
    <div className="w-full 2xl:flex 2xl:flex-row 2xl:justify-center">
      <div className="2xl:flex 2xl:w-2/5 2xl:flex-row 2xl:justify-end">
        <div className="max-w-3xl">
          <SectionTitle text={'Skills'} />
          <LeftSectionTexts />
        </div>
      </div>
      <div className="2xl:w-3/5 2xl:pt-10">
        <h1 className="tags ml-6">{'<div class="grid">'}</h1>
        <SkillsBoard />
        <h1 className="tags ml-6">{'</div>'}</h1>
      </div>
    </div>
  </section>
)

export default Skills
