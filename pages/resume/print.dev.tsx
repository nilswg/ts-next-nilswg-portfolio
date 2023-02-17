/**
 * Resume 列印功能是透過 puppeteer 對網站內容進行 pdf 快照。
 * 所以，resume/print 不是給用戶瀏覽，而是專給 puppeteer 生成履歷用。
 */

import Resume from '@/components/Resume'
import { NextPageContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ResumePage = () => {
  return (
    <div className="min-h-[1122px] w-full max-w-[820px] overflow-hidden bg-[#FCFCFC]">
      <Resume />
    </div>
  )
}

export default ResumePage

export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        'home',
        'common',
        'resume',
      ])),
    },
  }
}
