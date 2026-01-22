import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © {currentYear} Twin Burger | หมั่นโถวเบอร์เกอร์ แป้งหมั่นโถวสูตรคุณแม่
        </p>
        <div className="footer-links">
          <Link to="/about" className="footer-link">เกี่ยวกับเรา</Link>
          <Link to="/menu" className="footer-link">เมนู</Link>
          <Link to="/contact" className="footer-link">ติดต่อ</Link>
          <a 
            href="https://www.facebook.com/twinburger.bkk/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            Facebook
          </a>
          <a 
            href="https://www.instagram.com/twinburger.bkk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            Instagram
          </a>
          <a 
            href="https://www.tiktok.com/@twinburger.bkk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            TikTok
          </a>
          <a 
            href="https://linktr.ee/twinburger" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            LINE
          </a>
        </div>
      </div>
    </footer>
  )
}
