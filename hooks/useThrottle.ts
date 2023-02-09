import { useCallback } from 'react'

type AnyFn = (...args: any[]) => void
type Args = Parameters<AnyFn>

/*
const foo = (f:AnyFn) => {}
const bar = <F extends AnyFn>(f:F) => {}

type a = Extract<Parameters<(typeof foo)>, any[]>;
type b = Extract<Parameters<(typeof bar)>, any[]>;

type Equal<T,U> = T extends U ? true : false;

type c = Equal<a, b> // c is true;
*/

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
