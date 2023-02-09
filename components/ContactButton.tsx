import { useContactStore } from '@/stores/contact'
import { CgMail, CgSpinner } from 'react-icons/cg'

const Loading = () => (
  <span className=" cursor-pointer">
    <CgSpinner
      className={`h-6 w-8 animate-[spin_1s_linear_infinite] text-sky-400`}
    />
  </span>
)

const Ready = () => (
  <span className="cursor-pointer group-hover:animate-[3s_both_shakeY_infinite]">
    <CgMail className="h-6 w-8" />
  </span>
)

const ContactButton = () => {
  const loading = useContactStore((state) => state.loading)
  return (
    <button
      className="flat-btn group flex w-[10rem] justify-center gap-0"
      type="submit"
      disabled={loading}
    >
      <input
        className="cursor-pointer uppercase tracking-[0.5rem]"
        type="submit"
        value={'send'}
      />
      {loading ? <Loading /> : <Ready />}
    </button>
  )
}

export default ContactButton
