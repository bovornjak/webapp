import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © {currentYear} Lumina. Crafted with passion.
        </p>
        <div className="footer-links">
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/work" className="footer-link">Work</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            Twitter
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
