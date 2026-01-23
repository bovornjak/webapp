export default function Contact() {
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
            Order Now
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-primary)',
            marginBottom: 'var(--space-lg)',
            fontWeight: 400,
            opacity: 0.9
          }}>
            สั่งซื้อเลย!
          </p>
          <p style={{
            color: 'var(--color-text-muted)',
            fontSize: '1rem',
            marginBottom: 'var(--space-xl)',
            fontWeight: 300,
            lineHeight: 1.8
          }}>
            พร้อมให้บริการ Snack Box, Meal Box, Catering และ Food Support 
            ติดต่อสอบถามได้เลยค่ะ ยินดีให้บริการ!
          </p>

          <div className="contact-details" style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
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
                เปิดรับออเดอร์ทุกวัน 09:00 - 20:00 น.
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
                📍 พื้นที่ให้บริการ
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                กรุงเทพฯ และปริมณฑล<br />
                (ค่าส่งคิดตามระยะทาง)
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
                📦 กำลังการผลิต
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                สามารถทำได้สูงสุด<br />
                <strong style={{ color: 'var(--color-text)' }}>1,000 กล่องต่อวัน</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
