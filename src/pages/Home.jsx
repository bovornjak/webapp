import { Link } from 'react-router-dom'

export default function Home() {
  const services = [
    {
      icon: '📦',
      title: 'Snack Box',
      titleThai: 'สแน็คบ็อกซ์',
      price: 'เริ่มต้น 80 บาท',
      description: 'ชุดของว่างพร้อมทาน เหมาะสำหรับงานประชุม สัมมนา งานออกบูธ หรืองานเลี้ยงเล็กๆ'
    },
    {
      icon: '🍱',
      title: 'Meal Box',
      titleThai: 'ชุดข้าวกล่อง',
      price: 'เริ่มต้น 159 บาท',
      description: 'เซ็ตอาหารจัดเต็ม อิ่มอร่อยครบทุกมื้อ มีให้เลือกหลากหลายเมนู'
    },
    {
      icon: '🎪',
      title: 'Catering',
      titleThai: 'จัดเลี้ยงนอกสถานที่',
      price: 'ติดต่อสอบถาม',
      description: 'บริการจัดเลี้ยงนอกสถานที่ งานแต่ง งานเปิดตัว งานบริษัท พร้อมทีมงานมืออาชีพ'
    },
    {
      icon: '🎤',
      title: 'Food Support',
      titleThai: 'ฟู้ดซัพพอร์ตศิลปิน',
      price: 'ติดต่อสอบถาม',
      description: 'สนับสนุนอาหารศิลปิน กองถ่าย คอนเสิร์ต และอีเวนต์พิเศษ พร้อมจัดเซ็ตถ่ายรูป'
    }
  ]

  const features = [
    { icon: '✅', text: 'อร่อย สะอาด วัตถุดิบคุณภาพ' },
    { icon: '✅', text: 'มีให้เลือกหลากหลายเมนู' },
    { icon: '✅', text: 'ออกใบกำกับภาษี/บิลเงินสดได้' },
    { icon: '✅', text: 'จัดส่งตรงเวลา' },
    { icon: '✅', text: 'ทำได้สูงสุด 1,000 กล่อง/วัน' },
    { icon: '✅', text: 'มีความรับผิดชอบ ไม่ทิ้งงาน' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-fade-in">
              ✨ แป้งหมั่นโถวสูตรคุณแม่
            </div>
            <h1 className="hero-title animate-fade-in animate-delay-1">
              Twin Burger
            </h1>
            <p className="hero-title-thai animate-fade-in animate-delay-1">
              หมั่นโถวเบอร์เกอร์ แป้งหมั่นโถวสูตรคุณแม่
            </p>
            <p className="hero-description animate-fade-in animate-delay-2">
              รับจัด <span className="highlight">Snack Box</span> • <span className="highlight">Meal Box</span> • <span className="highlight">Catering</span>
              <br />และ <span className="highlight">Food Support ศิลปิน</span> 
              <br />อร่อย อิ่ม คุ้มค่า ส่งตรงถึงที่!
            </p>
            <div className="btn-group animate-fade-in animate-delay-3">
              <Link to="/menu" className="btn btn-primary">
                ดูเมนูทั้งหมด
              </Link>
              <Link to="/contact" className="btn btn-outline">
                สั่งเลย
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">บริการของเรา</p>
            <h2 className="section-title">What We Do</h2>
            <p className="section-title-thai">บริการจัดเลี้ยงครบวงจร</p>
            <p className="section-description">
              ไม่ว่าจะเป็นงานเล็กหรืองานใหญ่ เราพร้อมเสิร์ฟความอร่อยถึงที่!
            </p>
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
            <p className="section-eyebrow">ทำไมต้องเลือกเรา</p>
            <h2 className="section-title">Why Twin Burger?</h2>
            <p className="section-title-thai">ทำไมต้องเลือก Twin Burger</p>
          </div>
          <div className="cards-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {features.map((feature, index) => (
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
                <span style={{ fontSize: '1.5rem', color: 'var(--color-accent)' }}>{feature.icon}</span>
                <span style={{ color: 'var(--color-text)', fontSize: '1rem' }}>{feature.text}</span>
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
