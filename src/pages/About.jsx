export default function About() {
  const stats = [
    { number: '1000+', label: 'ออเดอร์ต่อเดือน' },
    { number: '50+', label: 'งานจัดเลี้ยง' },
    { number: '100+', label: 'Food Support' },
    { number: '5★', label: 'รีวิวเฉลี่ย' }
  ]

  const values = [
    {
      icon: '🥡',
      title: 'Fresh Ingredients',
      titleThai: 'วัตถุดิบสดใหม่',
      description: 'เราใช้วัตถุดิบคุณภาพดี สดใหม่ทุกวัน เพื่อความอร่อยที่ดีที่สุด'
    },
    {
      icon: '👨‍🍳',
      title: 'Homemade Recipe',
      titleThai: 'สูตรคุณแม่',
      description: 'แป้งหมั่นโถวสูตรคุณแม่ ทำสดใหม่ทุกวัน นุ่มหอมไม่เหมือนใคร'
    },
    {
      icon: '🚀',
      title: 'Fast Delivery',
      titleThai: 'ส่งตรงเวลา',
      description: 'บริการจัดส่งตรงเวลา ถึงที่หมายตามนัด ไม่ต้องรอนาน'
    },
    {
      icon: '💯',
      title: 'Best Value',
      titleThai: 'คุ้มค่าทุกบาท',
      description: 'ราคาเป็นมิตร อิ่มอร่อยคุ้มค่า เหมาะกับทุกงบประมาณ'
    }
  ]

  return (
    <>
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-grid">
            <div className="about-image"></div>
            <div className="about-content">
              <h1>Twin Burger</h1>
              <p className="title-thai">หมั่นโถวเบอร์เกอร์ แป้งหมั่นโถวสูตรคุณแม่</p>
              <p>
                Twin Burger เกิดจากความรักในการทำอาหารและความต้องการที่จะสร้างสรรค์ 
                เมนูใหม่ๆ ที่แตกต่าง จึงนำ <strong style={{color: 'var(--color-primary)'}}>หมั่นโถวสูตรคุณแม่</strong> 
                มาเป็นขนมปังเบอร์เกอร์ ได้รสชาตินุ่มนวลแบบใหม่ที่ไม่เหมือนใคร!
              </p>
              <p>
                เราเริ่มต้นจากครัวเล็กๆ ด้วยใจรักและความตั้งใจ วันนี้เราพร้อมให้บริการ
                ทั้ง Snack Box, Meal Box, Catering และ Food Support สำหรับงานศิลปิน 
                กองถ่าย และอีเวนต์ต่างๆ
              </p>
              <p>
                ✨ <strong style={{color: 'var(--color-primary)'}}>แป้งหมั่นโถวสูตรคุณแม่</strong> ที่คุณต้องลอง!
              </p>
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
            <p className="section-eyebrow">ทำไมต้องเลือกเรา</p>
            <h2 className="section-title">Why Twin Burger?</h2>
            <p className="section-title-thai">ทำไมต้อง Twin Burger</p>
          </div>
          <div className="cards-grid">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div className="card-icon">{value.icon}</div>
                <h3 className="card-title">{value.title}</h3>
                <p className="card-title-thai">{value.titleThai}</p>
                <p className="card-description">{value.description}</p>
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
              Food Support
            </h3>
            <p className="section-title-thai">ฟู้ดซัพพอร์ตศิลปิน</p>
            <p className="card-description" style={{ maxWidth: '600px', margin: '0 auto', marginTop: 'var(--space-md)' }}>
              รับจัดอาหารสนับสนุนศิลปิน กองถ่าย คอนเสิร์ต แฟนมีตติ้ง 
              และอีเวนต์พิเศษต่างๆ พร้อมจัดเป็นเซ็ตสวยงาม ถ่ายรูปลงโซเชียลได้เลย!
              <br /><br />
              ✨ รับทำป้ายชื่อศิลปิน • จัดเซ็ตถ่ายรูป • ห่อของขวัญพิเศษ
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
