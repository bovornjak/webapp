import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Menu() {
  const { t } = useLanguage()

  const packages = [
    { icon: '📦', badge: t.menu.badges.popular, title: 'Snack Box', ...t.menu.packages.snackBox },
    { icon: '🍱', badge: t.menu.badges.value, title: 'Meal Box', ...t.menu.packages.mealBox },
    { icon: '🎪', badge: t.menu.badges.large, title: 'Catering', ...t.menu.packages.catering },
    { icon: '🎤', badge: t.menu.badges.special, title: 'Food Support', ...t.menu.packages.foodSupport },
  ]

  const menuItems = [
    { icon: '🍔', name: 'หมั่นโถวเบอร์เกอร์หมู / Pork Burger', price: '59' },
    { icon: '🍔', name: 'หมั่นโถวเบอร์เกอร์ไก่ / Chicken Burger', price: '59' },
    { icon: '🍔', name: 'หมั่นโถวเบอร์เกอร์เนื้อ / Beef Burger', price: '79' },
    { icon: '🍔', name: 'หมั่นโถวดับเบิ้ลชีส / Double Cheese', price: '89' },
    { icon: '🍟', name: 'เฟรนช์ฟรายส์ / French Fries', price: '39' },
    { icon: '🧀', name: 'เฟรนช์ฟรายส์ชีส / Cheese Fries', price: '49' },
    { icon: '🥤', name: 'ชาไทยเย็น / Thai Iced Tea', price: '35' },
    { icon: '🥛', name: 'นมสดเย็น / Iced Fresh Milk', price: '35' }
  ]

  return (
    <>
      {/* Menu Hero */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: 'var(--space-lg)' }}>
            <p className="section-eyebrow">{t.menu.eyebrow}</p>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              {t.menu.title}
            </h1>
            <p className="section-title-thai">{t.menu.subtitle}</p>
            <p className="section-description">{t.menu.description}</p>
          </div>

          {/* Packages Grid */}
          <div className="menu-grid">
            {packages.map((pkg, index) => (
              <div key={index} className="menu-card">
                <div className="menu-image">
                  <span className="menu-image-icon">{pkg.icon}</span>
                </div>
                <div className="menu-content">
                  <span className="menu-badge">{pkg.badge}</span>
                  <h3 className="menu-title">{pkg.title}</h3>
                  <p className="menu-title-thai">{pkg.subtitle}</p>
                  <p className="menu-description">{pkg.desc}</p>
                  <ul style={{ 
                    listStyle: 'none', 
                    marginBottom: 'var(--space-md)',
                    padding: 0 
                  }}>
                    {pkg.items.map((item, i) => (
                      <li key={i} style={{ 
                        color: 'var(--color-text-muted)',
                        fontSize: '0.85rem',
                        padding: 'var(--space-xs) 0',
                        borderBottom: '1px solid var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)'
                      }}>
                        <span style={{ color: 'var(--color-primary)' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="menu-price">{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">{t.menu.whyEyebrow}</p>
            <h2 className="section-title">{t.menu.whyTitle}</h2>
            <p className="section-title-thai">{t.menu.whySubtitle}</p>
          </div>
          <div 
            className="card" 
            style={{ 
              maxWidth: '700px', 
              margin: '0 auto',
              padding: 'var(--space-xl)'
            }}
          >
            <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
              {t.features.map((feature, index) => (
                <div 
                  key={index} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 'var(--space-md)',
                    padding: 'var(--space-sm) 0',
                    borderBottom: index < t.features.length - 1 ? '1px solid var(--color-border)' : 'none'
                  }}
                >
                  <span style={{ fontSize: '1.25rem', color: 'var(--color-accent)' }}>✅</span>
                  <span style={{ color: 'var(--color-text)', fontSize: '1rem' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Individual Menu Items */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">{t.menu.alacarteEyebrow}</p>
            <h2 className="section-title">{t.menu.alacarteTitle}</h2>
            <p className="section-title-thai">{t.menu.alacarteSubtitle}</p>
          </div>
          <div className="cards-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {menuItems.map((item, index) => (
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
                <span style={{ fontSize: '1.75rem' }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                    {item.name}
                  </h3>
                </div>
                <p className="menu-price" style={{ marginBottom: 0 }}>{item.price} ฿</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="section">
        <div className="container">
          <div 
            className="card" 
            style={{ 
              textAlign: 'center', 
              padding: 'var(--space-xl)',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            <p style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>📝</p>
            <h3 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
              {t.menu.noteTitle}
            </h3>
            <p className="card-description">
              {t.menu.notes.map((note, i) => (
                <span key={i}>• {note}<br /></span>
              ))}
            </p>
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
            <p style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>🍔</p>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-sm)' }}>
              {t.menu.ctaTitle}
            </h2>
            <p className="section-title-thai" style={{ marginBottom: 'var(--space-sm)' }}>
              {t.menu.ctaSubtitle}
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)' }}>
              📞 094-466-6498 | LINE: @twinburger
            </p>
            <Link to="/contact" className="btn btn-primary">
              {t.menu.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
