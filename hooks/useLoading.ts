import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export function useLoading(initialValue: boolean): boolean {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(initialValue)

  const handleStart = useCallback(
    (url: string) => {
      // console.log('handleStart', url, router.asPath, url === router.asPath);
      return setIsLoading(true)
    },
    [setIsLoading]
  )

  const handleComplete = useCallback(
    (url: string) => {
      // console.log('handleComplete', url, router.asPath, url === router.asPath);
      return setIsLoading(false)
    },
    [setIsLoading]
  )

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router.events])

  return isLoading
}
