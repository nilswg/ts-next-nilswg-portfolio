import Head from 'next/head'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
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

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()
  let pageName = getParsedPathName(router.pathname)

  return (
    <>
      <Head>
        <title>{`Nilswg | ${pageName}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="w-full">{children}</main>
      <Footer />
      {<PageLoader />}
      {<Toasts />}
      {/* {<ToastsDebugger />} */}
    </>
  )
}

export default Layout
