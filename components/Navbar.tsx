import { useStores } from '@/stores'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useMemo } from 'react'
import EnChButton from './EnChButton'
import { HorizontalFrame, VerticalFrame } from './NavbarFrames'
import SocialLinks from './SocialLinks'

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/#projects', text: 'Projects' },
  { href: '/#contact', text: 'Contact' },
  { href: '/blog', text: 'Blog' },
]

const Navbar = () => {
  const switchMenuOpen = useStores((state) => state.switchMenuOpen)

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

  return (
    <header
      className={`fixed top-0 z-20 h-navbar w-full border-b-[1px] border-b-gray-600 bg-myblack text-white md:flex md:items-center md:justify-between`}
    >
      <HorizontalFrame>
        <ul className="mr-5 flex flex-row items-center justify-center">
          {navItems.map((item, i) => (
            <li
              key={`navbar_items_horizontal_${item.text}`}
              className="px-4 py-5 hover:rounded hover:bg-gray-800 hover:text-sky-400"
            >
              <Link key={i} href={item.href} className="font-russon text-lg">
                {item.text}
              </Link>
            </li>
          ))}
          <li
            key={`navbar_items_horizontal_enchbtn`}
            className="group px-4 py-5 hover:rounded hover:bg-gray-800 hover:text-sky-400"
          >
            <EnChButton
              className="text-lg"
              inputProps={{
                className: `h-[16px] w-[32px] before:h-[16px] before:w-[16px] group-hover:border-sky-500 before:group-hover:bg-sky-500`,
              }}
            />
          </li>
        </ul>
      </HorizontalFrame>
      <VerticalFrame>
        <ul className="flex h-full flex-col items-center justify-center gap-3">
          {navItems.map((item, i) => (
            <li
              key={`navbar_items_vertical_${item.text}`}
              className="flex w-full items-center justify-center py-2"
            >
              <Link
                key={i}
                href={item.href}
                className="w-[12rem] py-2 px-2 text-justify font-russon text-3xl"
                onClick={switchMenuOpen}
              >
                {item.text}
              </Link>
            </li>
          ))}
          <li
            key={`navbar_items_vertical_enchbtn`}
            className="flex w-full items-center justify-center py-2"
          >
            <EnChButton
              className="text-3xl"
              inputProps={{
                className: `h-[2.5rem] w-[5rem] before:h-[2.5rem] before:w-[2.5rem]`,
              }}
            />
          </li>
        </ul>
        <div className="mt-auto pb-8">
          <SocialLinks className="flex justify-center gap-5 py-2 text-5xl text-white" />
        </div>
      </VerticalFrame>
    </header>
  )
}

export default Navbar
