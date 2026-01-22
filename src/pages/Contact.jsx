import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - in a real app, this would send to an API
    console.log('Form submitted:', formData)
    alert('Thanks for reaching out! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section className="section">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h1>
              Let's create something <em>extraordinary</em>
            </h1>
            <p>
              Have a project in mind? We'd love to hear about it. 
              Drop us a line and let's explore how we can work together.
            </p>

            <div className="contact-details">
              <a href="mailto:hello@lumina.studio" className="contact-item">
                <div className="contact-icon">✉</div>
                <span className="contact-text">hello@lumina.studio</span>
              </a>
              <a href="tel:+15551234567" className="contact-item">
                <div className="contact-icon">☎</div>
                <span className="contact-text">+1 (555) 123-4567</span>
              </a>
              <div className="contact-item">
                <div className="contact-icon">◎</div>
                <span className="contact-text">
                  123 Creative Lane<br />
                  San Francisco, CA 94102
                </span>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-xl)' }}>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-sm)' }}>
                Follow us
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
                  <a 
                    key={social}
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    style={{ fontSize: '0.9rem' }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company" className="form-label">Company (Optional)</label>
              <input
                type="text"
                id="company"
                name="company"
                className="form-input"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              Send Message
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
