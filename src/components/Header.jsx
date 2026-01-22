import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside or on a link
  const closeMenu = () => setMenuOpen(false)

  // Prevent body scroll when menu is open
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
            alt="Twin Burger - หมั่นโถวเบอร์เกอร์ แป้งหมั่นโถวสูตรคุณแม่" 
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

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
            onClick={closeMenu}
          >
            หน้าแรก
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            เกี่ยวกับเรา
          </NavLink>
          <NavLink 
            to="/menu" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            เมนู
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            ติดต่อสั่งซื้อ
          </NavLink>
          
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

        {/* Overlay */}
        {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  )
}
