import { NextPageContext } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'

const NotFoundTexts = () => {
  const { t } = useTranslation('common')

  return (
    <div className="absolute rotate-12 rounded bg-[#FF6A3D] px-2 text-sm">
      {t('page_not_found', { defaultValue: 'Page Not Found' })}
    </div>
  )
}

const GoHomeText = () => {
  const { t } = useTranslation('common')

  return (
    <span className="relative block border border-current bg-myblack px-8 py-3">
      {t('go_home', { defaultValue: 'Go Home' })}
    </span>
  )
}

const NotFoundPage = () => (
  <main className="flex min-h-screen w-full flex-col items-center justify-center bg-myblack">
    <h1 className="text-9xl font-extrabold tracking-widest text-white">404</h1>
    <NotFoundTexts />
    <button className="mt-5">
      <Link
        href="/"
        className="group relative inline-block text-sm font-medium text-[#FF6A3D] focus:outline-none focus:ring active:text-orange-500"
      >
        <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
        <GoHomeText />
      </Link>
    </button>
  </main>
)

export async function getStaticProps(ctx: NextPageContext) {
  return {
    props: {
      ...(await serverSideTranslations(ctx?.locale ?? '', ['common'])),
    },
    revalidate: false
  }
}

export default NotFoundPage
