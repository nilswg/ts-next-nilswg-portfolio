import { create } from 'zustand'

type ContactStore = {
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const useContactStore = create<ContactStore>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set((state) => ({ loading })),
}))
