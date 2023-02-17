import Resume from '@/components/Resume'
import { NextPageContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { BiDownload } from 'react-icons/bi'

const DownloadResumeButton = () => {
  const { locale } = useRouter()
  return (
    <a
      href={`/api/getResume?locale=${locale}`}
      className="absolute top-2 left-4 z-[100] mb-[1.5rem] inline-block rounded-full px-4 py-4 font-medium shadow-lg duration-300 hover:bg-[#403A3A] hover:text-[#FAFAFA]"
    >
      <BiDownload />
    </a>
  )
}

const ResumeEditorContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-[5rem] w-full">
      <div className="relative mx-auto min-h-[1122px] max-w-[830px] overflow-hidden bg-[#FCFCFC] shadow-[0_-1px_4px_rgba(0,0,0,.1)]">
        <DownloadResumeButton />
        <div className="flex w-full justify-center">{children}</div>
      </div>
    </div>
  )
}

const ResumePage = () => {
  return (
    <ResumeEditorContainer>
      <Resume />
    </ResumeEditorContainer>
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
