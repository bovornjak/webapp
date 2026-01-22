import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img 
            src="/logo.png" 
            alt="Twin Burger - หมั่นโถวเบอร์เกอร์ แป้งหมั่นโถวสูตรคุณแม่" 
            className="logo-image"
          />
        </Link>
        <nav className="nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            หน้าแรก
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            เกี่ยวกับเรา
          </NavLink>
          <NavLink 
            to="/menu" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            เมนู
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            ติดต่อสั่งซื้อ
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
