import { useStores } from '@/stores'
import { memo } from 'react'
import { HiMenuAlt2, HiOutlineX } from 'react-icons/hi'

const MenuButton = () => {
  const isMenuOpen = useStores((state) => state.isMenuOpen)
  const switchMenuOpen = useStores((state) => state.switchMenuOpen)
  return (
    <div className="block md:hidden">
      <button
        className="align-top text-[2.75rem] transition-all md:text-[3rem]"
        onClick={switchMenuOpen}
      >
        {isMenuOpen ? <HiOutlineX /> : <HiMenuAlt2 />}
      </button>
    </div>
  )
}

export default memo(MenuButton)
