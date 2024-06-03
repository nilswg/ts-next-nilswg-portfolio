import { Image } from './Image'
import NilswgLogo from 'public/nilswg-blue-noblack.svg'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="flex h-footer flex-col items-center justify-center gap-6 text-white">
      <Image
        src={NilswgLogo}
        alt="nilson weng logo for footer"
        height={64}
      ></Image>
      <SocialLinks className="flex flex-row gap-4 text-4xl text-white" />
      <p className="font-zhtw text-sm tracking-wide text-gray-400">
        © <span className="text-sky-500">Nilson Weng</span> | All rights
        reserved 2023.
      </p>
    </footer>
  )
}

export default Footer
