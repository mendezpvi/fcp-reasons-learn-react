import reactLogo from "../src/assets/react.svg"

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container flex">
        <img src={reactLogo} alt="React logo." className='header-logo' />
        <nav className='header-nav'>
          <ul className='menu flex'>
            <li className='menu-item'>
              <a href="#" className="menu-cta">pricing</a>
            </li>
            <li className='menu-item'>
              <a href="#" className="menu-cta">about</a>
            </li>
            <li className='menu-item'>
              <a href="#" className="menu-cta">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}