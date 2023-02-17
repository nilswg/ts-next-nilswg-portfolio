import AboutImage from '@/public/img/hero2.jpg'
import { Trans, useTranslation } from 'next-i18next'
import Image from 'next/image'
import SectionText from './SectionText'
import SectionTitle from './SectionTitle'

const AboutTexts = () => {
  const { t } = useTranslation('home')
  const aboutTexts = t('about.texts', { returnObjects: true }) as Array<string>

  console.log('AboutTexts')

  return (
    <div>
      <SectionTitle text={t('about.title', { defaultValue: 'About' })} />
      <SectionText>
        {aboutTexts?.length &&
          aboutTexts.map((text, i) => (
            <p key={`about_text_${i}`}>
              <Trans
                i18nKey={text}
                components={{
                  b: <b />,
                }}
              />
            </p>
          ))}
      </SectionText>
    </div>
  )
}

const About = () => (
  <section
    id="about"
    className={`mt-[var(--navbar-height)] w-full bg-myblack py-[var(--navbar-height)]`}
  >
    {/* <h1 className='absolute text-white text-lg'>{1}</h1> */}
    <div className="w-full 2xl:flex 2xl:flex-row 2xl:justify-center">
      <div className="2xl:flex 2xl:w-2/5 2xl:flex-row 2xl:justify-end">
        <div className="w-full max-w-3xl">
          <AboutTexts />
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
