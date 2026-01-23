import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const stats = [
    { number: '1000+', label: t.about.stats.orders },
    { number: '50+', label: t.about.stats.events },
    { number: '100+', label: t.about.stats.support },
    { number: '5★', label: t.about.stats.rating }
  ]

  const values = [
    { icon: '🥡', ...t.about.values.fresh },
    { icon: '👨‍🍳', ...t.about.values.homemade },
    { icon: '🚀', ...t.about.values.delivery },
    { icon: '💯', ...t.about.values.value },
  ]

  return (
    <>
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src="/logo.png" 
                alt="Twin Burger Logo" 
                className="about-logo-image"
              />
            </div>
            <div className="about-content">
              <h1>{t.about.title}</h1>
              <p className="title-thai">{t.about.subtitle}</p>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p><strong style={{color: 'var(--color-primary)'}}>{t.about.p3}</strong></p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">{t.about.whyEyebrow}</p>
            <h2 className="section-title">{t.about.whyTitle}</h2>
            <p className="section-title-thai">{t.about.whySubtitle}</p>
          </div>
          <div className="cards-grid">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div className="card-icon">{value.icon}</div>
                <h3 className="card-title">{value.title}</h3>
                <p className="card-title-thai">{value.subtitle}</p>
                <p className="card-description">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Support Section */}
      <section className="section">
        <div className="container">
          <div 
            className="card"
            style={{ 
              textAlign: 'center', 
              padding: 'var(--space-2xl)',
            }}
          >
            <p style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>🎤</p>
            <h3 className="section-title" style={{ fontSize: '1.75rem' }}>
              {t.about.foodSupportTitle}
            </h3>
            <p className="section-title-thai">{t.about.foodSupportSubtitle}</p>
            <p className="card-description" style={{ maxWidth: '600px', margin: '0 auto', marginTop: 'var(--space-md)' }}>
              {t.about.foodSupportDesc}
              <br /><br />
              {t.about.foodSupportFeatures}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
