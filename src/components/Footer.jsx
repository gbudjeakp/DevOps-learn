import './Footer.css'

const Footer = ({ year = new Date().getFullYear() }) => {
  const technologies = [
    { name: 'React + Vite', icon: '⚛️', color: '#61dafb' },
    { name: 'Docker', icon: '🐳', color: '#2496ed' },
    { name: 'Kubernetes', icon: '☸️', color: '#326ce5' },
    { name: 'Jenkins', icon: '🔧', color: '#d33833' },
  ]

  const links = [
    { name: 'GitHub', href: 'https://github.com', icon: '🐙' },
    { name: 'Jenkins', href: 'https://jenkins.io', icon: '🔧' },
    { name: 'Kubernetes', href: 'https://kubernetes.io', icon: '☸️' },
    { name: 'Docker', href: 'https://docker.com', icon: '🐳' },
  ]

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-gradient" />
        <div className="footer-pattern" />
      </div>
      
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-symbol">⚡</span>
            </div>
            <div className="brand-info">
              <h3 className="brand-title">DevOps Pipeline Demo</h3>
              <p className="brand-description">
                A complete CI/CD pipeline example showcasing modern DevOps practices 
                with React, Docker, and Kubernetes integration.
              </p>
            </div>
          </div>
          
          <div className="footer-sections">
            <div className="footer-section">
              <h4 className="section-title">Technologies</h4>
              <div className="tech-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-icon" style={{ color: tech.color }}>
                      {tech.icon}
                    </span>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="footer-section">
              <h4 className="section-title">Resources</h4>
              <div className="footer-links">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-text">{link.name}</span>
                    <span className="link-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="footer-info">
            <p className="copyright">
              &copy; {year} DevOps Pipeline Demo. Built with ❤️ for learning purposes.
            </p>
            <div className="footer-meta">
              <span className="meta-item">Open Source</span>
              <span className="meta-divider">•</span>
              <span className="meta-item">Educational Project</span>
              <span className="meta-divider">•</span>
              <span className="meta-item">Community Driven</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
