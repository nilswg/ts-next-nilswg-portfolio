import { useStores } from '@/stores'
import ExperiencesTimeline from './ExperiencesTimeline'
import SectionText from './SectionText'
import SectionTitle from './SectionTitle'

const ExperienceDescription = () => {
  const lang = useStores((state) => state.lang)
  return lang === 'en' ? (
    <>
      <p className="animate-fadeIn">
        I have 2.5 years of experience in web application and web server
        development, participating in large-scale, multi-person projects,
        including personal web pages, web games, and even ERP systems used by
        enterprises.
      </p>
    </>
  ) : (
    <>
      <p className="animate-fadeIn">
        目前約有 2.5
        年的網頁應用與網頁服務器的開發經驗，參與過大型多人的開發項目，包括個人網頁、網頁遊戲，乃至大型的商業使用的ERP系統。
      </p>
    </>
  )
}

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full bg-myblack py-[var(--navbar-height)]"
    >
      {/* <h1 className="absolute text-lg text-white">{2}</h1> */}
      <div className="w-full 2xl:flex 2xl:flex-row 2xl:justify-center">
        <div className="2xl:flex 2xl:w-2/5 2xl:flex-row 2xl:justify-end">
          <div className="max-w-3xl">
            <SectionTitle text={'Experience'} />
            <SectionText>
              <ExperienceDescription />
            </SectionText>
          </div>
        </div>
        <div className="2xl:w-3/5 2xl:pt-10">
          <h1 className="tags ml-6 2xl:ml-[10%]">{'<timeline>'}</h1>
          <div className="py-5">
            <ExperiencesTimeline />
          </div>
          <h1 className="tags ml-6 2xl:ml-[10%]">{'</timeline>'}</h1>
        </div>
      </div>
    </section>
  )
}

export default Experience
