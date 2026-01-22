import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    lineId: '',
    orderType: '',
    quantity: '',
    eventDate: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('ขอบคุณที่สนใจ! เราจะติดต่อกลับโดยเร็วที่สุดค่ะ 🍔')
    setFormData({ 
      name: '', 
      phone: '',
      lineId: '',
      orderType: '',
      quantity: '',
      eventDate: '',
      message: '' 
    })
  }

  return (
    <section className="section">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h1>Order Now</h1>
            <p className="title-thai">สั่งซื้อเลย!</p>
            <p>
              พร้อมให้บริการ Snack Box, Meal Box, Catering และ Food Support 
              ติดต่อสอบถามได้เลยค่ะ ยินดีให้บริการ!
            </p>

            <div className="contact-details">
              <a href="tel:0944666498" className="contact-item">
                <div className="contact-icon">📞</div>
                <span className="contact-text">094-466-6498</span>
              </a>
              <a href="https://linktr.ee/twinburger" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">💬</div>
                <span className="contact-text">LINE: @twinburger</span>
              </a>
              <a href="https://www.facebook.com/twinburger.bkk/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">📘</div>
                <span className="contact-text">Facebook: twinburger.bkk</span>
              </a>
              <a href="https://www.instagram.com/twinburger.bkk" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">📸</div>
                <span className="contact-text">IG: @twinburger.bkk</span>
              </a>
              <a href="https://www.tiktok.com/@twinburger.bkk" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">🎵</div>
                <span className="contact-text">TikTok: @twinburger.bkk</span>
              </a>
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <span className="contact-text">
                  เปิดรับออเดอร์ทุกวัน<br />
                  09:00 - 20:00 น.
                </span>
              </div>
            </div>

            <div style={{ 
              marginTop: 'var(--space-xl)', 
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
                📍 พื้นที่ให้บริการ
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                กรุงเทพฯ และปริมณฑล<br />
                (ค่าส่งคิดตามระยะทาง)
              </p>
            </div>

            <div style={{ 
              marginTop: 'var(--space-md)', 
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
                📦 กำลังการผลิต
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                สามารถทำได้สูงสุด<br />
                <strong style={{ color: 'var(--color-text)', fontSize: '1.1rem' }}>1,000 กล่องต่อวัน</strong>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              marginBottom: 'var(--space-lg)',
              textAlign: 'center',
              color: 'var(--color-primary)',
              fontStyle: 'italic'
            }}>
              แบบฟอร์มสั่งซื้อ
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">ชื่อ *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="ชื่อของคุณ"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">เบอร์โทร *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="081-234-5678"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="lineId" className="form-label">LINE ID</label>
              <input
                type="text"
                id="lineId"
                name="lineId"
                className="form-input"
                placeholder="@yourline"
                value={formData.lineId}
                onChange={handleChange}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
              <div className="form-group">
                <label htmlFor="orderType" className="form-label">ประเภทออเดอร์ *</label>
                <select
                  id="orderType"
                  name="orderType"
                  className="form-select"
                  value={formData.orderType}
                  onChange={handleChange}
                  required
                >
                  <option value="">เลือกประเภท</option>
                  <option value="snackbox">Snack Box (เริ่มต้น 80฿)</option>
                  <option value="mealbox">Meal Box (เริ่มต้น 159฿)</option>
                  <option value="catering">Catering จัดเลี้ยง</option>
                  <option value="foodsupport">Food Support ศิลปิน</option>
                  <option value="other">อื่นๆ</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="quantity" className="form-label">จำนวน (กล่อง/คน)</label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  className="form-input"
                  placeholder="เช่น 50 กล่อง"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="eventDate" className="form-label">วันที่ต้องการ</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                className="form-input"
                value={formData.eventDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">รายละเอียดเพิ่มเติม</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="เช่น สถานที่จัดส่ง, เมนูที่ต้องการ, ข้อมูลศิลปิน (กรณี Food Support), ต้องการใบกำกับภาษีหรือไม่ ฯลฯ"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              ส่งข้อมูล
            </button>

            <p style={{ 
              textAlign: 'center', 
              fontSize: '0.8rem', 
              color: 'var(--color-text-dim)',
              marginTop: 'var(--space-md)'
            }}>
              เราจะติดต่อกลับภายใน 24 ชั่วโมง
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
