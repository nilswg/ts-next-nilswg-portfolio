import { useEffect, useRef } from 'react'

type IntersectionLineProps = {
  fn: (observer: IntersectionObserver, entry: IntersectionObserverEntry) => void
  visible?: boolean
  position: string
  options?: IntersectionObserverInit
}

const IntersectionLine = ({
  fn,
  visible = false,
  position,
  options,
}: IntersectionLineProps) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref?.current) return
    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry]) => {
        fn(observer, entry)
      },
      options
    )

    observer.observe(ref.current)

    return () => {
      if (!ref?.current) return
      observer.unobserve(ref.current)
      observer.disconnect()
    }
  }, [ref])

  return (
    <div
      className={`
        relative ${position}
        ${
          visible &&
          `before:absolute before:z-10 before:w-full before:border before:border-red-600 before:content-['']`
        }
      `}
      ref={ref}
    ></div>
  )
}

export default IntersectionLine
