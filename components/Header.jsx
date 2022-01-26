import Closing from './Closing'
import RulingHeader from './RulingHeader'
import Image from 'next/image'
const Header = () => {
  return (
    <header className="hero">
      <Image
        className="hero__background"
        srcSet="/assets/img/pope-francis.webp 750w, /assets/img/pope-francis.@2x.webp 1440w"
        sizes="(min-width: 750px) 1440px, 100vw"
        src="/assets/img/pope-francis.webp"
        alt="Pope Francis"
        layout="fill"
      />
      <RulingHeader />
      <Closing />
    </header>
  )
}

export default Header
