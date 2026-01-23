import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  const services = [
    { icon: '📦', ...t.services.snackBox },
    { icon: '🍱', ...t.services.mealBox },
    { icon: '🎪', ...t.services.catering },
    { icon: '🎤', ...t.services.foodSupport },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-fade-in">
              {t.home.badge}
            </div>
            <h1 className="hero-title animate-fade-in animate-delay-1">
              {t.home.title}
            </h1>
            <p className="hero-title-thai animate-fade-in animate-delay-1">
              {t.home.subtitle}
            </p>
            <p className="hero-description animate-fade-in animate-delay-2">
              {t.home.description}
            </p>
            <div className="btn-group animate-fade-in animate-delay-3">
              <Link to="/menu" className="btn btn-primary">
                {t.home.viewMenu}
              </Link>
              <Link to="/contact" className="btn btn-outline">
                {t.home.orderNow}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">{t.home.servicesEyebrow}</p>
            <h2 className="section-title">{t.home.servicesTitle}</h2>
            <p className="section-title-thai">{t.home.servicesSubtitle}</p>
            <p className="section-description">{t.home.servicesDescription}</p>
          </div>
          <div className="cards-grid">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-title-thai">{service.titleThai}</p>
                <p style={{ color: 'var(--color-primary)', fontWeight: '500', marginBottom: 'var(--space-sm)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
                  {service.price}
                </p>
                <p className="card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">{t.home.whyUsEyebrow}</p>
            <h2 className="section-title">{t.home.whyUsTitle}</h2>
            <p className="section-title-thai">{t.home.whyUsSubtitle}</p>
          </div>
          <div className="cards-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {t.features.map((feature, index) => (
              <div 
                key={index} 
                className="card"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 'var(--space-md)',
                  padding: 'var(--space-md) var(--space-lg)'
                }}
              >
                <span style={{ fontSize: '1.5rem', color: 'var(--color-accent)' }}>✅</span>
                <span style={{ color: 'var(--color-text)', fontSize: '1rem' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div 
            className="card" 
            style={{ 
              textAlign: 'center', 
              padding: 'var(--space-2xl)',
              background: 'linear-gradient(135deg, var(--color-bg-card) 0%, var(--color-bg-elevated) 100%)'
            }}
          >
            <p style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }} className="animate-float">🍔</p>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-sm)' }}>
              {t.home.ctaTitle}
            </h2>
            <p className="section-title-thai" style={{ marginBottom: 'var(--space-sm)' }}>
              {t.home.ctaSubtitle}
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)' }}>
              📞 094-466-6498 | LINE: @twinburger
            </p>
            <Link to="/contact" className="btn btn-primary">
              {t.home.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
