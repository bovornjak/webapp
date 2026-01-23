import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { FacebookIcon, InstagramIcon, TikTokIcon, LineIcon } from './SocialIcons'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          {t.footer.copyright}
        </p>
        <div className="footer-links">
          <Link to="/about" className="footer-link">{t.nav.about}</Link>
          <Link to="/menu" className="footer-link">{t.nav.menu}</Link>
          <Link to="/contact" className="footer-link">{t.nav.contact}</Link>
          <a 
            href="https://www.facebook.com/twinburger.bkk/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link footer-social"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a 
            href="https://www.instagram.com/twinburger.bkk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link footer-social"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a 
            href="https://www.tiktok.com/@twinburger.bkk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link footer-social"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
          <a 
            href="https://lin.ee/RtGeSs9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link footer-social"
            aria-label="LINE"
          >
            <LineIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
