import { create } from 'zustand'

type langType = 'en' | 'ch'

type LangStore = {
  lang: langType
  switchLang: () => void
}

type NavbarStore = {
  isMenuOpen: boolean
  switchMenuOpen: () => void
}

type Store = LangStore & NavbarStore

export const useStores = create<Store>((set) => ({
  lang: 'en',
  switchLang: () => {
    set((state) => ({ lang: state.lang === 'en' ? 'ch' : 'en' }))
  },

  isMenuOpen: false,
  switchMenuOpen: () => {
    set((state) => ({ isMenuOpen: !state.isMenuOpen }))
  },
}))
