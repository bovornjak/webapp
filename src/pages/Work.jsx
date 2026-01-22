export default function Work() {
  const projects = [
    {
      category: 'Branding',
      title: 'Horizon Finance',
      description: 'Complete brand identity for a next-generation fintech startup'
    },
    {
      category: 'Web Design',
      title: 'Artisan Coffee Co.',
      description: 'E-commerce platform with custom CMS and subscription system'
    },
    {
      category: 'Digital Campaign',
      title: 'EcoVenture',
      description: 'Multi-channel sustainability campaign reaching 2M+ users'
    },
    {
      category: 'Branding',
      title: 'Nebula Wellness',
      description: 'Holistic brand strategy for luxury wellness retreat'
    },
    {
      category: 'Web Design',
      title: 'TechPulse',
      description: 'Dynamic news platform with real-time content updates'
    },
    {
      category: 'App Design',
      title: 'MindFlow',
      description: 'Meditation app with personalized wellness journeys'
    }
  ]

  const categories = ['All', 'Branding', 'Web Design', 'Digital Campaign', 'App Design']

  return (
    <>
      {/* Work Hero */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: 'var(--space-lg)' }}>
            <p className="section-eyebrow">Our Portfolio</p>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Work that speaks for itself
            </h1>
            <p className="section-description">
              A curated selection of projects across branding, web design, 
              and digital marketing.
            </p>
          </div>

          {/* Filter */}
          <div 
            style={{ 
              display: 'flex', 
              gap: 'var(--space-sm)', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-xl)'
            }}
          >
            {categories.map((category, index) => (
              <button 
                key={index}
                className="btn btn-outline"
                style={{ 
                  padding: 'var(--space-sm) var(--space-md)',
                  fontSize: '0.875rem',
                  ...(index === 0 && { 
                    background: 'var(--color-primary)', 
                    color: 'var(--color-bg)',
                    borderColor: 'var(--color-primary)'
                  })
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Our Process</p>
            <h2 className="section-title">How we bring ideas to life</h2>
          </div>
          <div className="cards-grid">
            {[
              {
                number: '01',
                title: 'Discovery',
                description: 'We dive deep into your brand, market, and objectives to understand what success looks like.'
              },
              {
                number: '02',
                title: 'Strategy',
                description: 'We develop a comprehensive roadmap that aligns creative vision with business goals.'
              },
              {
                number: '03',
                title: 'Design',
                description: 'We craft beautiful, functional designs through iterative collaboration and refinement.'
              },
              {
                number: '04',
                title: 'Deliver',
                description: 'We launch your project with care, ensuring everything performs flawlessly.'
              }
            ].map((step, index) => (
              <div key={index} className="card">
                <div 
                  className="card-icon" 
                  style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontWeight: 600,
                    fontSize: '1.25rem'
                  }}
                >
                  {step.number}
                </div>
                <h3 className="card-title">{step.title}</h3>
                <p className="card-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
