import { getI18nObjects, getI18nTextArray } from '@/lib/getI18nTranslation'
import getJobDate from '@/lib/getJobDate'
import { Trans, useTranslation } from 'next-i18next'
import Image from 'next/image'
import Hero from 'public/img/self_head.jpg'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'

const SectionTitle = ({ text }: { text: string }) => (
  <h2 className="mb-2 text-[1.1rem] font-semibold uppercase tracking-[.35rem]">
    {text}
  </h2>
)

const Circle = () => (
  <span className="inline-block h-[5px] w-[5px] items-center rounded-full bg-[#403A3A]"></span>
)

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

// --h1-font-size: 1.5rem;
// --h2-font-size: 1.25rem;
// --h3-font-size: 1rem;
// --normal-font-size: .938rem;
// --small-font-size: .875rem;
// --smaller-font-size: .813rem;
const Resume = () => {
  const { t } = useTranslation('resume')
  const home = useTranslation('home')
  const experiences = getI18nObjects<ExperienceProps>(home.t, 'experience-timeline')

  const lang = useTranslation('common').t('lang')

  const fontStyles = lang === 'en' ? /*tw:*/ 'font-roboto' : /*tw:*/ 'font-zhtw'

  const textFontStyles =
    lang === 'en' ? /*tw:*/ 'font-roboto_condensed' : /*tw:*/ 'font-zhtw'

  const jobTitleStyles =
    lang === 'en'
      ? /*tw:*/ 'font-roboto font-semibold tracking-wide'
      : /*tw:*/ 'font-zhtw font-semibold tracking-widest'
  const jobPositionStyles =
    lang === 'en'
      ? /*tw:*/ 'font-roboto font-semibold tracking-wide'
      : /*tw:*/ 'font-zhtw font-semibold tracking-wider'

  const profileTexts = getI18nTextArray(t, 'profileTexts')

  return (
    <div
      id="area-cv"
      className={
        'grid min-h-[1122px] w-[800px] grid-cols-[.5fr_1fr] bg-[#FCFCFC] shadow-[0_0_8px_rgba(13,12,12,.15)]'
      }
    >
      <div className="w-full bg-[#F0EFEF]">
        <div className="mx-4">
          {/* <!--========== HOME ==========--> */}
          <section className={`py-6 ${fontStyles}`}>
            <div className="flex flex-col items-center">
              <div className="relative h-[100px] w-[100px] rounded-full">
                <Image
                  className="rounded-full"
                  src={Hero}
                  alt="picture of resume"
                  objectFit="cover"
                  loading="lazy"
                  fill
                />
              </div>
              <h1
                id="resume_name"
                className="mt-2 text-center text-xl font-semibold uppercase tracking-widest text-[#403A3A]"
              >
                {t('name')}
              </h1>
              <h3 className="text-[.938rem]">{t('jobtitle')}</h3>
            </div>
            <div className="mt-10 flex flex-col gap-3">
              <span className="inline-flex items-center text-[.875rem] text-[#403A3A]">
                <BiMap className="mr-1 text-[1.2rem]" /> {t('address')}
              </span>
              <span className="inline-flex items-center text-[.875rem] text-[#403A3A]">
                <BiEnvelope className="mr-1 text-[1.2rem]" />{' '}
                nilsonweng@gmail.com
              </span>
              {process.env.NODE_ENV === 'development' && (
                <span className="inline-flex items-center text-[.875rem] text-[#403A3A]">
                  <BiPhone className="mr-1 text-[1.2rem]" /> 0988-572-252
                </span>
              )}
            </div>
          </section>

          {/* <!--========== SOCIAL ==========--> */}
          <section className={`py-6 font-roboto_condensed`}>
            <SectionTitle text={t('social')} />
            <div className="flex flex-col gap-2 pt-1">
              <a
                className="inline-flex items-center text-[.8rem] text-[#403A3A] hover:text-[#0B0A0A]"
                href="https://www.linkedin.com/in/nilson-weng-470672218/"
              >
                <AiFillLinkedin className="mr-1 text-[1.1rem]" />
                linkedin.com/in/nilson-weng-470672218
              </a>
              <a
                className="inline-flex items-center text-[.8rem] text-[#403A3A] hover:text-[#0B0A0A]"
                href="https://github.com/nilswg"
              >
                <AiFillGithub className="mr-1 text-[1.1rem]" />{' '}
                github.com/nilswg
              </a>
            </div>
          </section>

          {/* <!--========== PROFILE ==========--> */}
          <section className={`py-6 ${textFontStyles}`}>
            <SectionTitle text={t('profile')} />
            <div className="text-[.875rem]">
              {profileTexts.map((text, i) => (
                <p key={`resume_text_${i}`} className="mb-2">
                  <Trans i18nKey={text} components={{ b: <b /> }} />
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="w-full bg-[#FCFCFC]">
        <div className="mx-6">
          {/* <!--========== EXPERIENCE ==========--> */}
          <section className={`py-6 ${textFontStyles}`}>
            <SectionTitle text={t('experience')} />
            {experiences?.length &&
              experiences.map((x) => (
                <div key={`resume_exp_${x.company}`} className="flex">
                  <div className="pr-3">
                    <span className="relative mt-1 block h-3 w-3 rounded-full bg-[#707070]"></span>
                    <span className="block h-[105%] w-[2px] translate-x-[5px] bg-[#707070]"></span>
                  </div>
                  <div className="mb-6 grid gap-1">
                    <h2
                      className={`text-[1rem] ${jobTitleStyles} text-[#403A3A]`}
                    >
                      {x.jobtitle}
                    </h2>
                    <h3
                      className={`text-[.875rem] ${jobPositionStyles} text-[#403A3A]`}
                    >
                      {x.jobposition}｜{x.company}
                    </h3>
                    <span className="text-[.85rem] text-gray-500">
                      {getJobDate(x.begintime, lang)} -{' '}
                      {getJobDate(x.endtime, lang)}
                    </span>
                    <span className="text-[.85rem] font-normal tracking-normal text-[#0B0A0A]">
                      {x?.texts?.map((text, i) => (
                        <p key={i} className={`my-0 flex pl-2`}>
                          <span className="inline-block">-&nbsp;</span>
                          <span className="inline-block" key={i}>
                            {text}
                          </span>
                        </p>
                      ))}
                    </span>
                  </div>
                </div>
              ))}
          </section>

          {/* <!--========== SKILLS  ==========--> */}
          <section className={`py-6 ${fontStyles}`}>
            <SectionTitle text={t('skills')} />
            <div className="ml-3 grid grid-cols-3">
              {[
                {
                  category: 'Front End',
                  items: [
                    'TypeScript',
                    'React',
                    'Redux',
                    'Tailwind',
                    'Angular',
                    'Babylon.js',
                  ],
                },
                {
                  category: 'Back End',
                  items: [
                    'Node.js',
                    'Next.js',
                    'Express',
                    'Docker',
                    'Redis',
                    'Linux',
                  ],
                },
                {
                  category: 'Dev-Tools',
                  items: [
                    'Webpack',
                    'Rollup',
                    'Vite',
                    'NPM',
                    'Git',
                    'Prettier',
                  ],
                },
              ].map((prop) => (
                <ul
                  key={`resume_category_${prop.category}`}
                  className="flex flex-col items-start"
                >
                  <h3 className="">{prop.category}</h3>
                  <span className="mb-2 h-1 w-[calc(8rem)] border-b-2"></span>
                  {prop.items.map((item) => (
                    <li
                      key={`resume_skill_${item}`}
                      className="flex items-center gap-3"
                    >
                      <span className="inline-block h-[5px] w-[5px] items-center rounded-full bg-[#403A3A]"></span>
                      <span className="inline-block w-[8rem] text-[#403A3A]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>

          {/* <!--========== CERTIFICATES & LANGUAGES ==========--> */}
          <section className="flex">
            {/* <!--========== CERTIFICATES ==========--> */}
            <div className={`pl-0 ${fontStyles}`}>
              <SectionTitle text={t('certificates')} />
              <ul className="ml-3 flex">
                <li key={`resume_toeic`} className="flex items-center gap-3">
                  <Circle />
                  <span className="inline-block w-[16rem] text-[#403A3A]">
                    TOEIC : 595
                  </span>
                </li>
              </ul>
            </div>

            {/* <!--========== LANGUAGES ==========--> */}
            <div className={`pl-0 ${fontStyles}`}>
              <SectionTitle text={t('languages')} />
              <ul className="ml-3 flex flex-col">
                <li className="flex items-center gap-3">
                  <Circle />
                  <span className="inline-block w-[8rem] text-[#403A3A]">
                    {lang === 'en' ? 'Chinese, English' : '中文、英文'}
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resume
