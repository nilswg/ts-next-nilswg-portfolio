import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Opening from '@/components/Opening'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { NextPageContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
  return (
    <div className="mt-[var(--navbar-height)]">
      <h1 className="tags ml-4 text-xl leading-10">{'<html>'}</h1>
      <h1 className="tags ml-6 text-xl leading-10">{'<body>'}</h1>
      <Opening />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <h1 className="tags ml-6 text-xl leading-10">{'</body>'}</h1>
      <h1 className="tags ml-4 text-xl leading-10">{'</html>'}</h1>
    </div>
  )
}

export async function getStaticProps(ctx: NextPageContext) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        'home',
        'common',
      ])),
    },
    revalidate: false
  }
}

export default Home
