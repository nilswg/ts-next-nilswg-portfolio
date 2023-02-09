import { useCallback } from 'react'

type AnyFn = (...args: any[]) => void
type Args = Parameters<AnyFn>

function delay(fn: AnyFn, ms: number): AnyFn {
  return function (...args: Args) {
    setTimeout(() => {
      fn(...args)
    }, ms)
  }
}

const useDelay = (fn: AnyFn, ms: number, deps: any[] = []): AnyFn => {
  return useCallback(delay(fn, ms), deps)
}

export default useDelay
