import cookie from 'js-cookie'
import { useRouter } from 'next/router'
type LangInputProps = {
  className: string
}

const LangInput = ({ className }: LangInputProps) => {
  const router = useRouter()

  /**
   * 語系切換:
   * (1) en -> zh-TW
   * (2) zh-TW -> en
   */
  const handleLocaleChange = (event: any) => {
    const value = router.locale === 'zh-TW' ? 'en' : 'zh-TW'
    router.push(router.route, router.asPath, {
      locale: value,
    })

    /**
     * 當使用者自行切換使用的語言時，將結果保存至 cookies 中。
     * 便於 i18n 下次瀏覽網站時，會自動跳轉到對應語言的網頁。
     *
     * 請參閱: https://nextjs.org/docs/advanced-features/i18n-routing#leveraging-the-next_locale-cookie
     *
     * 但是，如果在 next.config.js 中，設置 localeDetection = false 時，
     * 將會導致此功能被關閉。
     *
     * 請參閱: https://nextjs.org/docs/advanced-features/i18n-routing#disabling-automatic-locale-detection
     */

    cookie.set('NEXT_LOCALE', value, { expires: 365 })
  }

  return (
    <input
      type="checkbox"
      className={`
        box-content inline-block h-4 w-8 cursor-pointer appearance-none border border-white before:absolute before:h-4 before:w-4 before:bg-white before:transition-transform before:duration-300 before:ease-in-out before:content-['']
        ${
          router.locale === 'en'
            ? 'before:translate-x-0'
            : 'before:translate-x-[100%]'
        }
        ${className}
      `}
      onChange={handleLocaleChange}
      checked={router.locale === 'en' ? true : false}
    />
  )
}

type Props = {
  className: string
  inputProps: LangInputProps
}

const EnChButton = ({ className, inputProps }: Props) => {
  const { locale } = useRouter()
  return (
    <label
      className={`flex cursor-pointer items-center gap-1 py-2 px-2 font-russon ${className}`}
    >
      <span>{locale === 'en' ? 'EN' : '英'}</span>
      <LangInput {...inputProps} />
      <span>{locale === 'en' ? 'CH' : '中'}</span>
    </label>
  )
}
export default EnChButton

// Example
//
// const Example = () => (
//   <EnChButton
//     className="text-3xl"
//     inputProps={{
//       className: 'h-[30px] w-[60px] before:h-[30px] before:w-[30px]',
//     }}
//   />
// )

// export const MyTest1 = ({ className, inputProps }: Props) => {
//   console.log('MyTest1')
//   return (
//     <label
//       className={`flex cursor-pointer items-center gap-1 py-2 px-2 font-russon ${className}`}
//     >
//       <span>EN</span>
//       <LangInput {...inputProps} />
//       <span>CH</span>
//     </label>
//   )
// }

// export const MyTest2 = ({ className, inputProps }: Props) => {
//   console.log('MyTest2')
//   return (
//     <label
//       className={`flex cursor-pointer items-center gap-1 py-2 px-2 font-russon ${className}`}
//     >
//       <span>EN</span>
//       {LangInput({ ...inputProps })}
//       <span>CH</span>
//     </label>
//   )
// }
