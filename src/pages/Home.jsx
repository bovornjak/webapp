import { Link } from 'react-router-dom'

export default function Home() {
  const services = [
    {
      icon: '◈',
      title: 'Brand Strategy',
      description: 'We craft compelling brand narratives that resonate with your audience and differentiate you from competitors.'
    },
    {
      icon: '✦',
      title: 'Web Design',
      description: 'Beautiful, responsive websites that combine stunning aesthetics with seamless user experiences.'
    },
    {
      icon: '◎',
      title: 'Digital Marketing',
      description: 'Data-driven campaigns that amplify your reach and drive meaningful engagement with your target market.'
    }
  ]

  const featuredProjects = [
    {
      category: 'Branding',
      title: 'Horizon Finance',
      description: 'Complete brand identity for fintech startup'
    },
    {
      category: 'Web Design',
      title: 'Artisan Coffee Co.',
      description: 'E-commerce platform with custom CMS'
    },
    {
      category: 'Digital Campaign',
      title: 'EcoVenture',
      description: 'Multi-channel sustainability campaign'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-eyebrow animate-fade-in">Creative Digital Studio</p>
            <h1 className="hero-title animate-fade-in animate-delay-1">
              We create digital experiences that <em>inspire</em>
            </h1>
            <p className="hero-description animate-fade-in animate-delay-2">
              Lumina is a creative studio specializing in brand strategy, 
              web design, and digital experiences that captivate and convert.
            </p>
            <div className="btn-group animate-fade-in animate-delay-3">
              <Link to="/work" className="btn btn-primary">
                View Our Work
                <span>→</span>
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What We Do</p>
            <h2 className="section-title">Services crafted to elevate your brand</h2>
            <p className="section-description">
              From strategy to execution, we provide end-to-end solutions 
              that transform how your audience perceives and interacts with your brand.
            </p>
          </div>
          <div className="cards-grid">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Featured Work</p>
            <h2 className="section-title">Projects we're proud of</h2>
            <p className="section-description">
              A selection of our recent work across branding, 
              web design, and digital marketing.
            </p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/work" className="btn btn-outline">
              View All Projects
              <span>→</span>
            </Link>
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
            <h2 className="section-title" style={{ marginBottom: 'var(--space-md)' }}>
              Ready to start your project?
            </h2>
            <p className="section-description" style={{ marginBottom: 'var(--space-lg)' }}>
              Let's create something extraordinary together.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
