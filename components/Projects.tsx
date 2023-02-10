import { useStores } from '@/stores'
import { ReactNode } from 'react'
import ProjectCard from './ProjectCard'
import SectionText from './SectionText'
import SectionTitle from './SectionTitle'

const projList = [
  {
    id: 'ts-next-nilswg-portfolio',
    title: 'Portfolio',
    demo: 'https://ts-next-nilswg-portfolio.vercel.app/',
    github: 'https://github.com/nilswg/ts-next-nilswg-portfolio',
    preview: '/img/projects/ts-next-nilswg-portfolio.png',
    tags: ['React', 'Next.js', 'Tailwind', 'Zustand'],
    description: "Nilson Weng's personal portfolio website.",
  },
  {
    id: 'ts-vite-react-weather-app',
    title: 'Weather App',
    demo: 'https://nilswg.github.io/ts-vite-react-weather-app/',
    github: 'https://github.com/nilswg/ts-vite-react-weather-app',
    preview: '/img/projects/ts-vite-react-weather-app.png',
    tags: ['React', 'Redux Toolkit', 'Vite', 'TypeScript', 'Styled Components'],
    description:
      'This is a weather app for learning purposes and built with React and Typescript.',
  },
  // {
  //   id: 'proj2',
  //   title: 'Meetup Room App',
  //   demo: '',
  //   github: '',
  //   preview: 'https://mdbootstrap.com/img/new/standard/nature/182.jpg',
  //   tags: ['React', 'Next.js'],
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  // },
  // {
  //   id: 'proj3',
  //   title: 'Just Leetcode',
  //   demo: '',
  //   github: '',
  //   preview: 'https://mdbootstrap.com/img/new/standard/nature/182.jpg',
  //   tags: ['React', 'Next.js'],
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  // },
  // {
  //   id: 'proj5',
  //   title: 'Food Recipe',
  //   demo: '',
  //   github: '',
  //   preview: 'https://mdbootstrap.com/img/new/standard/nature/182.jpg',
  //   tags: ['React', 'Next.js'],
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  // },
  // {
  //   id: 'proj6',
  //   title: 'Lowkeydd',
  //   demo: '',
  //   github: '',
  //   preview: 'https://mdbootstrap.com/img/new/standard/nature/182.jpg',
  //   tags: ['React', 'Next.js'],
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  // },
]

const ProjectsDescription = () => {
  const lang = useStores((state) => state.lang)

  return lang === 'en' ? (
    <>
      <p className="animate-fadeIn">There are my side projects here.</p>
    </>
  ) : (
    <>
      <p className="animate-fadeIn">我有一些個人專案的作品來向你展示。</p>
    </>
  )
}

const VerticalFrame = ({ children }: { children: ReactNode }) => (
  <div className="2xl:flex 2xl:w-2/5 2xl:justify-end">
    <div className="w-full max-w-3xl">{children}</div>
  </div>
)

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-myblack py-[var(--navbar-height)]"
    >
      {/* <h1 className="absolute text-lg text-white">{4}</h1> */}
      <VerticalFrame>
        <SectionTitle text={'Projects'} />
        <SectionText>
          <ProjectsDescription />
        </SectionText>
        <h1 className="tags ml-6">{'<div class="grid">'}</h1>
      </VerticalFrame>
      <div className="flex w-full flex-col items-center self-center">
        <div className="grid max-w-4xl grid-cols-1 gap-10 px-0 py-5 xs:px-9 lg:grid-cols-2 2xl:max-w-full 2xl:grid-cols-3">
          {projList.map((proj, i) => (
            <ProjectCard
              key={`proj_${proj.id}`}
              tags={proj.tags}
              title={proj.title}
              description={proj.description}
              demo={proj.demo}
              github={proj.github}
              preview={proj.preview}
            />
          ))}
        </div>
      </div>
      <VerticalFrame>
        <h1 className="tags ml-6">{'</div>'}</h1>
      </VerticalFrame>
    </section>
  )
}

export default Projects
