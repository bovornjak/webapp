export default function About() {
  const stats = [
    { number: '8+', label: 'Years Experience' },
    { number: '150+', label: 'Projects Completed' },
    { number: '40+', label: 'Happy Clients' },
    { number: '12', label: 'Team Members' }
  ]

  const values = [
    {
      icon: '◈',
      title: 'Craft Excellence',
      description: 'We obsess over every detail, ensuring each pixel and interaction meets the highest standards.'
    },
    {
      icon: '✦',
      title: 'Strategic Thinking',
      description: 'Beautiful design must serve a purpose. We align creativity with your business objectives.'
    },
    {
      icon: '◎',
      title: 'Collaborative Spirit',
      description: 'The best work emerges from true partnership. We work with you, not just for you.'
    },
    {
      icon: '◇',
      title: 'Continuous Evolution',
      description: 'We stay ahead of trends while grounding our work in timeless design principles.'
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
              <h1>
                A studio built on <em>passion</em> and purpose
              </h1>
              <p>
                Founded in 2018, Lumina emerged from a simple belief: that great 
                design has the power to transform businesses and create meaningful 
                connections with audiences.
              </p>
              <p>
                We're a collective of strategists, designers, and developers who 
                thrive on solving complex challenges through creative thinking. 
                Our approach blends artistic vision with data-driven insights to 
                deliver work that's both beautiful and effective.
              </p>
              <p>
                Every project is an opportunity to push boundaries and exceed 
                expectations. We don't just create—we craft experiences that 
                leave lasting impressions.
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
            <p className="section-eyebrow">Our Values</p>
            <h2 className="section-title">What drives us forward</h2>
            <p className="section-description">
              The principles that guide every decision we make and 
              every piece of work we deliver.
            </p>
          </div>
          <div className="cards-grid">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div className="card-icon">{value.icon}</div>
                <h3 className="card-title">{value.title}</h3>
                <p className="card-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">The Team</p>
            <h2 className="section-title">Meet the people behind the magic</h2>
            <p className="section-description">
              A diverse team of creatives, strategists, and technologists 
              united by a shared passion for exceptional work.
            </p>
          </div>
          <div 
            style={{ 
              textAlign: 'center', 
              padding: 'var(--space-2xl)',
              color: 'var(--color-text-muted)'
            }}
          >
            <p style={{ fontSize: '4rem', marginBottom: 'var(--space-md)' }}>✦</p>
            <p>We're always looking for talented individuals to join our team.</p>
            <a 
              href="mailto:careers@lumina.studio" 
              className="btn btn-outline"
              style={{ marginTop: 'var(--space-md)', display: 'inline-flex' }}
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
