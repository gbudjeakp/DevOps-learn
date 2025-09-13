import './Header.css'

const Header = ({ title = 'Jenkins CI/CD Pipeline Demo', subtitle }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
        <nav className="header-nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#demo" className="nav-link">
            Demo
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
