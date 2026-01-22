import { Link } from 'react-router-dom'

export default function Menu() {
  const packages = [
    {
      icon: '📦',
      badge: 'ยอดนิยม',
      title: 'Snack Box',
      titleThai: 'สแน็คบ็อกซ์ และงานออกนอกสถานที่',
      description: 'ชุดของว่างพร้อมทาน เหมาะสำหรับงานประชุม สัมมนา งานออกบูธ หรืองานเลี้ยงเล็กๆ',
      price: 'เริ่มต้น 80 บาท',
      items: ['อาหารคาว/หวาน/ผลไม้', 'เครื่องดื่ม', 'บรรจุภัณฑ์สวยงาม', 'ออกใบกำกับภาษีได้']
    },
    {
      icon: '🍱',
      badge: 'อิ่มคุ้ม',
      title: 'Meal Box',
      titleThai: 'ชุดข้าวกล่อง',
      description: 'เซ็ตอาหารจัดเต็ม อิ่มอร่อยครบมื้อ มีให้เลือกหลากหลายเมนู ทั้งอาหารคาว หวาน และผลไม้',
      price: 'เริ่มต้น 159 บาท/ชุด',
      items: ['อาหารคาว หวาน ผลไม้', 'เครื่องดื่ม', 'ออกใบกำกับภาษี/บิลเงินสดได้', 'บรรจุภัณฑ์พรีเมียม']
    },
    {
      icon: '🎪',
      badge: 'งานใหญ่',
      title: 'Catering',
      titleThai: 'จัดเลี้ยงนอกสถานที่',
      description: 'บริการจัดเลี้ยงนอกสถานที่ งานแต่งงาน งานเปิดตัว งานบริษัท พร้อมพนักงานมืออาชีพ',
      price: 'ติดต่อสอบถาม',
      items: ['เมนูตามต้องการ', 'พนักงานเสิร์ฟมืออาชีพ', 'อุปกรณ์จัดเลี้ยง', 'รองรับได้ถึง 1,000 กล่อง/วัน']
    },
    {
      icon: '🎤',
      badge: 'พิเศษ',
      title: 'Food Support',
      titleThai: 'ฟู้ดซัพพอร์ตศิลปิน',
      description: 'สนับสนุนอาหารศิลปิน กองถ่าย คอนเสิร์ต แฟนมีตติ้ง พร้อมจัดเซ็ตถ่ายรูป',
      price: 'ติดต่อสอบถาม',
      items: ['เซ็ตอาหารตามงบ', 'ป้ายชื่อศิลปิน', 'จัดเซ็ตถ่ายรูป', 'ห่อของขวัญพิเศษ']
    }
  ]

  const features = [
    { icon: '✅', text: 'อร่อย สะอาด วัตถุดิบคุณภาพ' },
    { icon: '✅', text: 'มีให้เลือกหลากหลายเมนู' },
    { icon: '✅', text: 'ออกใบกำกับภาษี หรือ บิลเงินสดได้' },
    { icon: '✅', text: 'จัดส่งตรงเวลา' },
    { icon: '✅', text: 'สามารถทำได้สูงสุด 1,000 กล่องต่อวัน' },
    { icon: '✅', text: 'พนักงานมืออาชีพ' },
    { icon: '✅', text: 'มีความรับผิดชอบ ไม่ทิ้งงาน' },
  ]

  const menuItems = [
    { icon: '🍔', name: 'หมั่นโถวเบอร์เกอร์หมู', price: '59' },
    { icon: '🍔', name: 'หมั่นโถวเบอร์เกอร์ไก่', price: '59' },
    { icon: '🍔', name: 'หมั่นโถวเบอร์เกอร์เนื้อ', price: '79' },
    { icon: '🍔', name: 'หมั่นโถวดับเบิ้ลชีส', price: '89' },
    { icon: '🍟', name: 'เฟรนช์ฟรายส์', price: '39' },
    { icon: '🧀', name: 'เฟรนช์ฟรายส์ชีส', price: '49' },
    { icon: '🥤', name: 'ชาไทยเย็น', price: '35' },
    { icon: '🥛', name: 'นมสดเย็น', price: '35' }
  ]

  return (
    <>
      {/* Menu Hero */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: 'var(--space-lg)' }}>
            <p className="section-eyebrow">เมนูของเรา</p>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Our Menu
            </h1>
            <p className="section-title-thai">เมนูและแพ็คเกจ</p>
            <p className="section-description">
              เลือกแพ็คเกจที่เหมาะกับงานของคุณ หรือสั่งเมนูเดี่ยวก็ได้!
            </p>
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
                  <p className="menu-title-thai">{pkg.titleThai}</p>
                  <p className="menu-description">{pkg.description}</p>
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
            <p className="section-eyebrow">ทำไมต้องเลือกเรา</p>
            <h2 className="section-title">Why Twin Burger?</h2>
            <p className="section-title-thai">ทำไมต้องเลือก Twin Burger</p>
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
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 'var(--space-md)',
                    padding: 'var(--space-sm) 0',
                    borderBottom: index < features.length - 1 ? '1px solid var(--color-border)' : 'none'
                  }}
                >
                  <span style={{ fontSize: '1.25rem', color: 'var(--color-accent)' }}>{feature.icon}</span>
                  <span style={{ color: 'var(--color-text)', fontSize: '1rem' }}>{feature.text}</span>
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
            <p className="section-eyebrow">เมนูเดี่ยว</p>
            <h2 className="section-title">À La Carte</h2>
            <p className="section-title-thai">สั่งเมนูเดี่ยว</p>
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
                  <h3 style={{ fontSize: '0.95rem', marginBottom: '0' }}>
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
              หมายเหตุ
            </h3>
            <p className="card-description">
              • ราคาอาจมีการเปลี่ยนแปลงตามวัตถุดิบ<br />
              • สั่งขั้นต่ำ 30 กล่องสำหรับ Snack Box / Meal Box<br />
              • กรุณาสั่งล่วงหน้าอย่างน้อย 3 วัน<br />
              • สอบถามเมนูพิเศษหรือปรับเปลี่ยนได้<br />
              • ออกใบกำกับภาษี หรือ บิลเงินสดได้
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
              Order Now
            </h2>
            <p className="section-title-thai" style={{ marginBottom: 'var(--space-sm)' }}>
              สั่งเลยวันนี้!
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)' }}>
              📞 094-466-6498 | LINE: @twinburger
            </p>
            <Link to="/contact" className="btn btn-primary">
              ติดต่อสั่งซื้อ
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
