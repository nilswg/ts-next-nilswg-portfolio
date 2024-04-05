'use client'

import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { FC, Fragment, ReactNode, createContext, memo, useCallback, useContext, useMemo, useState } from 'react'
import EnChButton from './EnChButton'
import SocialLinks from './SocialLinks'
import Image from 'next/image'
import logo from 'public/nilswg-blue-noblack.svg'
import { HiMenuAlt2, HiOutlineX } from 'react-icons/hi'

const Navbar = () => {
  return (
    <Nav>
      <Nav.Horizontal>
        <Nav.HorizontalItems />
      </Nav.Horizontal>
      <Nav.Vertical>
        <Nav.VerticalItems />
        <Nav.SocialLinks />
      </Nav.Vertical>
    </Nav>
  )
}

export default Navbar

type Props_NavContext = {
  isMenuOpen: boolean
  switchMenuOpen: () => void
  navItems: { href: string; text: string }[]
}

const NavContext = createContext<Props_NavContext | null>(null)
const useNavContext = () => {
  const ctx = useContext(NavContext)
  if (!ctx) {
    throw new Error('useNavContext must be used within a NavProvider')
  }
  return ctx
}

type NavCompoundComponent = FC<{ children: ReactNode }> & {
  Horizontal: FC<{ children: ReactNode }>
  HorizontalItems: FC
  // HorizontalItem: FC<{ children: ReactNode }>
  Vertical: FC<{ children: ReactNode }>
  VerticalItems: FC
  // VerticalItem: FC<{ children: ReactNode }>
  MenuButton: FC
  SocialLinks: FC
}

const Nav: NavCompoundComponent = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation('common')
  const navItems = useMemo(
    () => [
      { href: '/', text: t('nav.home') },
      { href: '/#projects', text: t('nav.projects') },
      { href: '/#contact', text: t('nav.contact') },
      { href: '/blog', text: t('nav.blog') },
    ],
    [t]
  )
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const switchMenuOpen = useCallback(() => setIsMenuOpen((s) => !s), [])
  return (
    <header className="fixed top-0 z-20 h-navbar w-full border-b-[1px] border-b-gray-600 bg-myblack text-white md:flex md:items-center md:justify-between">
      <NavContext.Provider value={{ navItems, isMenuOpen, switchMenuOpen }}>{children}</NavContext.Provider>
    </header>
  )
}

Nav.Horizontal = ({ children }) => {
  return (
    <Fragment>
      <div className="flex h-full flex-row items-center justify-between bg-myblack px-4">
        <Link href="/" className="flex w-28 items-center md:w-32">
          <Image src={logo} alt="nilswg logo" />
        </Link>
        <Nav.MenuButton />
      </div>
      <nav className={`hidden md:flex md:h-auto md:w-auto md:flex-row`}>{children}</nav>
    </Fragment>
  )
}

Nav.HorizontalItems = memo(() => {
  const { navItems } = useNavContext()
  return (
    <ul className="mr-5 flex flex-row items-center justify-center">
      {navItems.map((item, i) => (
        <HorizontalItem key={i}>
          <Link key={i} href={item.href} className="font-russon text-lg">
            {item.text}
          </Link>
        </HorizontalItem>
      ))}
      <HorizontalItem>
        <EnChButton
          className="text-lg"
          inputProps={{
            className: `h-[16px] w-[32px] before:h-[16px] before:w-[16px] group-hover:border-sky-500 before:group-hover:bg-sky-500`,
          }}
        />
      </HorizontalItem>
    </ul>
  )
})

Nav.Vertical = ({ children }) => {
  const { isMenuOpen } = useNavContext()
  return (
    <nav
      className={`
          flex h-[calc(100vh-var(--navbar-height))] w-full flex-col bg-gradient-to-b from-myblack to-gray-700 transition-all duration-500 md:hidden
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-[120vw] md:translate-x-0'}
        `}
    >
      {children}
    </nav>
  )
}

Nav.VerticalItems = memo(() => {
  const { navItems } = useNavContext()
  return (
    <ul className="flex h-full flex-col items-center justify-center gap-3">
      {navItems.map((item, i) => (
        <VerticalItem key={i}>
          <Link key={i} href={item.href} className="w-[12rem] px-2 py-2 text-justify font-russon text-3xl">
            {item.text}
          </Link>
        </VerticalItem>
      ))}
      <VerticalItem>
        <EnChButton
          className="text-3xl"
          inputProps={{
            className: `h-[2.5rem] w-[5rem] before:h-[2.5rem] before:w-[2.5rem]`,
          }}
        />
      </VerticalItem>
    </ul>
  )
})

Nav.MenuButton = () => {
  const { isMenuOpen, switchMenuOpen } = useNavContext()
  return (
    <div className="block md:hidden">
      <button className="align-top text-[2.75rem] transition-all md:text-[3rem]" onClick={switchMenuOpen}>
        {isMenuOpen ? <HiOutlineX /> : <HiMenuAlt2 />}
      </button>
    </div>
  )
}

Nav.SocialLinks = () => {
  return <SocialLinks className="mt-auto flex justify-center gap-5 py-2 pb-8 text-5xl text-white" />
}

const HorizontalItem = ({ children }: { children: ReactNode }) => {
  return <li className="px-4 py-5 hover:rounded hover:bg-gray-800 hover:text-sky-400">{children}</li>
}

const VerticalItem = ({ children }: { children: ReactNode }) => {
  const { switchMenuOpen } = useNavContext()
  return (
    <li className="flex w-full items-center justify-center py-2" onClick={switchMenuOpen}>
      {children}
    </li>
  )
}
