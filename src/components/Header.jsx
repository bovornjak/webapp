import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img 
            src="/logo.png" 
            alt="Twin Burger" 
            className="logo-image"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="menu-toggle-bar"></span>
          <span className="menu-toggle-bar"></span>
          <span className="menu-toggle-bar"></span>
        </button>

        {/* Navigation & Language Toggle Container */}
        <div className="nav-container">
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end
              onClick={closeMenu}
            >
              {t.nav.home}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {t.nav.about}
            </NavLink>
            <NavLink 
              to="/menu" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {t.nav.menu}
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {t.nav.contact}
            </NavLink>
            
            {/* Mobile Language Toggle */}
            <button 
              className="nav-lang-toggle"
              onClick={() => {
                toggleLanguage()
                closeMenu()
              }}
            >
              {language === 'th' ? '🇬🇧 English' : '🇹🇭 ภาษาไทย'}
            </button>
            
            {/* Mobile Contact Info */}
            <div className="nav-mobile-contact">
              <a href="tel:0944666498" className="nav-mobile-link">
                📞 094-466-6498
              </a>
              <a href="https://linktr.ee/twinburger" target="_blank" rel="noopener noreferrer" className="nav-mobile-link">
                💬 LINE: @twinburger
              </a>
            </div>
          </nav>

          {/* Desktop Language Toggle */}
          <button 
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {language === 'th' ? 'EN' : 'TH'}
          </button>
        </div>

        {/* Overlay */}
        {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  )
}
