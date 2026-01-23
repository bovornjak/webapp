import { useLanguage } from '../context/LanguageContext'
import { PhoneIcon, LineIcon, FacebookIcon, InstagramIcon, TikTokIcon, ClockIcon } from '../components/SocialIcons'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section className="section">
      <div className="container">
        {/* Contact Info */}
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 600,
            marginBottom: 'var(--space-sm)',
            color: 'var(--color-primary)',
            fontStyle: 'italic'
          }}>
            {t.contact.title}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-primary)',
            marginBottom: 'var(--space-lg)',
            fontWeight: 400,
            opacity: 0.9
          }}>
            {t.contact.subtitle}
          </p>
          <p style={{
            color: 'var(--color-text-muted)',
            fontSize: '1rem',
            marginBottom: 'var(--space-xl)',
            fontWeight: 300,
            lineHeight: 1.8
          }}>
            {t.contact.description}
          </p>

          <div className="contact-details" style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
            <a href="tel:0944666498" className="contact-item">
              <div className="contact-icon"><PhoneIcon /></div>
              <span className="contact-text">094-466-6498</span>
            </a>
            <a href="https://linktr.ee/twinburger" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon"><LineIcon /></div>
              <span className="contact-text">LINE: @twinburger</span>
            </a>
            <a href="https://www.facebook.com/twinburger.bkk/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon"><FacebookIcon /></div>
              <span className="contact-text">Facebook: twinburger.bkk</span>
            </a>
            <a href="https://www.instagram.com/twinburger.bkk" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon"><InstagramIcon /></div>
              <span className="contact-text">IG: @twinburger.bkk</span>
            </a>
            <a href="https://www.tiktok.com/@twinburger.bkk" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon"><TikTokIcon /></div>
              <span className="contact-text">TikTok: @twinburger.bkk</span>
            </a>
            <div className="contact-item">
              <div className="contact-icon"><ClockIcon /></div>
              <span className="contact-text">
                {t.contact.hours}
              </span>
            </div>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-md)',
            marginTop: 'var(--space-xl)'
          }}>
            <div style={{ 
              padding: 'var(--space-md)',
              background: 'var(--color-bg-card)',
              borderRadius: '12px',
              border: '1px solid var(--color-border)'
            }}>
              <p style={{ 
                color: 'var(--color-primary)', 
                fontWeight: '500',
                marginBottom: 'var(--space-sm)'
              }}>
                📍 {t.contact.serviceArea}
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                {t.contact.serviceAreaDesc}<br />
                {t.contact.serviceAreaNote}
              </p>
            </div>

            <div style={{ 
              padding: 'var(--space-md)',
              background: 'var(--color-bg-card)',
              borderRadius: '12px',
              border: '1px solid var(--color-border)'
            }}>
              <p style={{ 
                color: 'var(--color-primary)', 
                fontWeight: '500',
                marginBottom: 'var(--space-sm)'
              }}>
                📦 {t.contact.capacity}
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                {t.contact.capacityDesc}<br />
                <strong style={{ color: 'var(--color-text)' }}>{t.contact.capacityAmount}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
