import { useRouter } from 'next/router'
import type { ReactNode } from 'react'

import Head from 'next/head'
import Footer from './Footer'
import NavBar from './Navbar'
import PageLoader from './PageLoader'
import Toasts from './Toasts'

type LayoutProps = {
  children?: ReactNode
}

const getFirstCharUpperCase = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const getParsedPathName = (url: string) => {
  let res = ''
  if (url === '/') {
    return 'Home'
  } else {
    let paths = url.split('/')
    // res = JSON.stringify(paths)
    res += getFirstCharUpperCase(paths[1])

    for (let i = 2; i < paths.length; i++) {
      res += ` : ${paths[i]}`
    }
  }
  return res
}

const layout = ({ children }: LayoutProps) => {
  const router = useRouter()

  let pageName = getParsedPathName(router.pathname)

  return (
    <>
      <Head>
        <title>{`Nilswg | ${pageName}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="mt-[var(--navbar-height)] w-full">
        <h1 className="tags ml-4 text-xl leading-10">{'<html>'}</h1>
        <h1 className="tags ml-6 text-xl leading-10">{'<body>'}</h1>
        {children}
        <h1 className="tags ml-6 text-xl leading-10">{'</body>'}</h1>
        <h1 className="tags ml-4 text-xl leading-10">{'</html>'}</h1>
      </main>
      <Footer />
      {<PageLoader />}
      {<Toasts />}
      {/* {<ToastsDebugger />} */}
    </>
  )
}

export default layout
