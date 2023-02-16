import getJobDate from '@/lib/getJobDate'
import getJobTenure from '@/lib/getJobTenure'
import { useStores } from '@/stores'
import Image from 'next/image'

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

export const data: { en: ExperienceProps[]; ch: ExperienceProps[] } = {
  en: [
    {
      id: 'work2',
      img: '/img/experiences/lattek.jpg',
      company: 'Dah Lih Puh Co., Ltd',
      jobtitle: 'Full Stack Developer',
      jobposition: 'Senior Engineer',
      location: '台中市',
      begintime: [2021, 12],
      endtime: [2022, 9],
      texts: [
        'Assist companies in building the next-generation ERP systems.',
        "Help the architect maintain the company's front-end shared modules and version control with GitLab.",
        'Use Prettier and ESLint improve the quality and readability of code',
        'Use Angular 2+ to construct the user interface.',
        'Build RESTful CRUD APIs with ASP.NET Core (3.1+).',
        'Write PL/SQL stored procedures to interact with the Oracle database.',
      ],
    },
    {
      id: 'work1',
      img: '/img/experiences/chungyo.png',
      company: 'La Pluma Fashion Group Co., Ltd',
      jobtitle: 'Game Program Developer',
      jobposition: 'Assistant Engineer',
      location: '台中市',
      begintime: [2019, 10],
      endtime: [2021, 3],
      texts: [
        'Develop web-based game projects using Canvas 2D and WebGL.',
        'Maintain the game to run correctly on different browsers and mobile devices.',
        'Use Pixi.js to create 2D games such as slots, little mary slots, and match-3.',
        'Use Babylon.js to create 3D games like Coin Pusher.',
        'Integrate APIs to complete the main game and other payment functions.',
      ],
    },
    {
      id: 'university',
      img: '/img/experiences/thu.png',
      company: 'Tung Hai University',
      jobtitle: 'Computer Science and Information Engineering',
      jobposition: 'Bachelor',
      location: '台中市',
      begintime: [2013, 7],
      endtime: [2017, 1],
      texts: [
        "I entered the second year of the CSIE Department as a transfer student from the same college's architecture department.",
      ],
    },
  ],
  ch: [
    {
      id: 'work2',
      img: '/img/experiences/lattek.jpg',
      company: '英屬維京群島商拿鐵科技股份有限公司',
      jobtitle: '全端工程師',
      location: '台中市',
      jobposition: '資深工程師',
      begintime: [2021, 12],
      endtime: [2022, 9],
      texts: [
        '協助企業打造新一代一致性 MES 與 ERP 系統',
        '協助架構師維護底層共用模組與工具，並以 GitLab 版控',
        '導入 Prettier、ESLint 提高程式碼品質',
        '使用 Node.js 輔助開發工作，實作程式碼產出工具',
        '使用 Angular(2+) 構建使用者操作介面',
        '使用 ASP.NET Core(3.1+) 實作 RESTful CRUD API 與 JWT 驗證',
        '使用 PL/SQL 撰寫 Store Procedure 存取 Oracle',
      ],
    },
    {
      id: 'work1',
      img: '/img/experiences/chungyo.png',
      company: '中佑集團凡谷興業有限公司',
      jobtitle: '遊戲程式設計師',
      jobposition: '助理工程師',
      location: '台中市',
      begintime: [2019, 10],
      endtime: [2021, 3],
      texts: [
        '開發基於 canvas 2d 與 webgl 技術的網頁遊戲項目',
        '擁有不同瀏覽器與移動裝置的產品開發與維護經驗',
        '前後端 API 整合，實現遊戲主體功能與其他金流操作功能',
        '以 TypeScript 為開發語言，配合公司自製的遊戲框架',
        '以 Pixi.js 製作 2D 遊戲動畫，如老虎機、小瑪莉、消消樂',
        '以 Babylon.js 製作 3D 遊戲動畫，如推幣機',
      ],
    },
    {
      id: 'university',
      img: '/img/experiences/thu.png',
      company: '私立東海大學',
      jobposition: '學士',
      jobtitle: '資訊工程學系(資電組) 畢業',
      location: '台中市',
      begintime: [2013, 7],
      endtime: [2017, 1],
      texts: ['同校建築系學生，轉學進入資工系二年級就讀'],
    },
  ],
}

const ExperiencesTimeline = () => {
  const lang = useStores((state) => state.lang)
  const experiences = data[lang]
  const fontStyles = lang === 'en' ? 'font-outfit' : 'font-zhtw'
  return (
    <div className="flex w-full flex-col items-center pl-6 pr-3 md:pl-56">
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
                className="mt-1 px-3 font-russon text-base transition-transform duration-200 sm:text-xl"
              >
                {e.company}
              </h1>
              <h2
                id="jobtitle"
                className="mt-2 px-3 font-play text-base text-white xs:text-base sm:text-lg"
              >
                {e.jobtitle}
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

export default ExperiencesTimeline
