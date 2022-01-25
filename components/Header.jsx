import Closing from './Closing'
import RulingHeader from './RulingHeader'

const Header = () => {
  return (
    <header className="hero">
      <img
        className="hero__background"
        srcSet="/assets/img/pope-francis.png 750w, /assets/img/pope-francis.@2x.png 1440w"
        sizes="(min-width: 750px) 1440px, 100vw"
        src="/assets/img/pope-francis.png"
        alt="Pope Francis"
      />
      <RulingHeader />
      <Closing />
    </header>
  )
}

export default Header
