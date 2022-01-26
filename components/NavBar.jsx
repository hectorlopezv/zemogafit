import Image from 'next/image'
const NavBar = () => {
  return (
    <nav className="nav" role="navigation">
      <div className="max-centered">
        <h1 className="nav__logo">Rule of thumb.</h1>
        <button className="nav__hamburger icon-button" alt="Open Menu" aria-label="icon menu open">
          <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fillRule="nonzero" />
          </svg>
        </button>
        <ul className="nav__links">
          <li>
            <a href="#" aria-label="past trials navb bar option">
              Past Trials
            </a>
          </li>
          <li>
            <a href="#" aria-label="how it works navb bar option">
              How It Works
            </a>
          </li>
          <li>
            <a href="#" aria-label="login signup navb bar option">
              Login / Sign Up
            </a>
          </li>
          <li>
            <form>
              <input className="nav__search-input" aria-label="search" type="text" />
              <button className="nav__search icon-button" aria-label="search button" alt="Search" type="submit">
                <Image src="/assets/img/search.svg" alt="search" height={25} width={35} />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
