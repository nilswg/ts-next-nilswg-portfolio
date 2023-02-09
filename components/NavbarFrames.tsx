import { useStores } from '@/stores'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/nilswg-blue-noblack.svg'
import { ReactNode } from 'react'
import MenuButton from './MenuButton'

type HorizontalFrameProps = {
  children: ReactNode
}

export const HorizontalFrame = ({ children }: HorizontalFrameProps) => {
  return (
    <>
      <div className="flex h-full flex-row items-center justify-between bg-myblack px-4">
        <Link href="/" className="flex w-28 items-center md:w-32">
          <Image src={logo} alt="nilswg logo" />
        </Link>
        <MenuButton />
      </div>
      <nav className={`hidden md:flex md:h-auto md:w-auto md:flex-row`}>
        {children}
      </nav>
    </>
  )
}

type VerticalFrameProps = {
  children: ReactNode
}

export const VerticalFrame = ({ children }: VerticalFrameProps) => {
  const isMenuOpen = useStores((state) => state.isMenuOpen)
  return (
    <nav
      className={`
        flex h-[calc(100vh-var(--navbar-height))] w-full flex-col bg-gradient-to-b from-myblack to-gray-700 transition-all duration-500 md:hidden
        ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-[120vw] md:translate-x-0'
        }
      `}
    >
      {children}
    </nav>
  )
}
