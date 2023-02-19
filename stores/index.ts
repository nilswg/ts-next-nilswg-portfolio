import { create } from 'zustand'

type NavbarStore = {
  isMenuOpen: boolean
  switchMenuOpen: () => void
}

type Store = NavbarStore

export const useStores = create<Store>((set) => ({
  isMenuOpen: false,
  switchMenuOpen: () => {
    set((state) => ({ isMenuOpen: !state.isMenuOpen }))
  },
}))
