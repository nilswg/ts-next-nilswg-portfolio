import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useLoading = (initialValue: boolean): boolean => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(initialValue)

  useEffect(() => {
    const handleStart = (url: string) => {
      // console.log('handleStart', url, router.asPath, url === router.asPath);
      return setIsLoading(true)
    }
    const handleComplete = (url: string) => {
      // console.log('handleComplete', url, router.asPath, url === router.asPath);
      return setIsLoading(false)
    }
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return isLoading
}

export default useLoading
