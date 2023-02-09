import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Opening from '@/components/Opening'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Opening />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
