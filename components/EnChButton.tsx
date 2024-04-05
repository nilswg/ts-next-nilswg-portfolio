'use client'

import cookie from 'js-cookie'
import { useI18n } from './useI18n'
import { type FC, useCallback, ReactNode } from 'react'

type EnChCompoundComponent = FC<{ className: string; children: ReactNode }> & {
  CheckBox: FC<{ className: string }>
}

const EnChButton: EnChCompoundComponent = ({ className, children }) => {
  const { t } = useI18n('common')
  return (
    <label className={`flex cursor-pointer items-center gap-1 px-2 py-2 font-russon ${className}`}>
      <span>{t('nav.en', { defaultValue: 'EN' })}</span>
      {children}
      <span>{t('nav.ch', { defaultValue: 'CH' })}</span>
    </label>
  )
}

EnChButton.CheckBox = ({ className }: LangInputProps) => {
  const { i18n } = useI18n()
  const handleLocaleChange = useCallback(() => {
    const newLang = i18n.language === 'en' ? 'zh-TW' : 'en'
    switchLanguage(newLang)
    saveLocaleToCookie(newLang)
  }, [])

  return (
    <input
      type="checkbox"
      className={`
        box-content inline-block h-4 w-8 cursor-pointer appearance-none border border-white before:absolute before:h-4 before:w-4 before:bg-white before:transition-transform before:duration-300 before:ease-in-out before:content-[''] group-hover:border-sky-500 before:group-hover:bg-sky-500
        ${i18n.language === 'en' ? 'before:translate-x-0' : 'before:translate-x-[100%]'}
        ${className}
      `}
      onChange={handleLocaleChange}
      checked={i18n.language === 'en' ? true : false}
    />
  )
}

export default EnChButton

type LangInputProps = {
  className: string
}

function switchLanguage(language: string) {
  // 在這個函數中，你可以根據所選的語言生成新的URL
  var currentPath = window.location.pathname // 取得目前的路徑
  var newPath = ''

  // 根據所選的語言來修改路徑
  switch (language) {
    case 'en':
      newPath = currentPath.replace(/\/zh-TW\/?/, '/en/') // 將 'zh-TW' 替換為 'en'
      break
    case 'zh-TW':
      newPath = currentPath.split('/')[1] === 'en' ? currentPath.replace(/\/en\/?/, '/zh-TW/') : '/zh-TW' + currentPath
      break
  }

  // 將網頁重新導向到新的URL
  // window.location.href = window.location.origin + newPath
  // use pushState
  window.history.pushState({}, '', newPath) //

  // go to new page
  window.location.reload()
}

function saveLocaleToCookie(locale: string) {
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
  cookie.set('NEXT_LOCALE', locale, { expires: 365 })
}
