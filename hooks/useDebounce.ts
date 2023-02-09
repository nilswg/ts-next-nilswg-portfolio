import { useCallback } from 'react'

type AnyFn = (...args: any[]) => void
type Args = Parameters<AnyFn>

export function debounce(fn: AnyFn, ms: number): AnyFn {
  let timeout: NodeJS.Timeout | null = null

  return function (...args: Args) {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn(...args)
    }, ms)
  }
}

const useDebounce = (fn: AnyFn, ms: number, deps: any[] = []): AnyFn => {
  return useCallback(debounce(fn, ms), deps)
}

export default useDebounce
