import { useCallback } from 'react'

type AnyFn = (...args: any[]) => void
type Args = Parameters<AnyFn>

export function throttle(fn: AnyFn, ms: number): AnyFn {
  let lastCallTime: number = Date.now()

  return function (...args: Args) {
    const currentTime = Date.now()
    const elapsedTime = currentTime - lastCallTime
    if (elapsedTime >= ms) {
      lastCallTime = currentTime
      fn(...args)
    }
  }
}

const useThrottle = (fn: AnyFn, ms: number, deps: any[] = []): AnyFn => {
  return useCallback(throttle(fn, ms), deps)
}

export default useThrottle
