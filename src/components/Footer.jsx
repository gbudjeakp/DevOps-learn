import './Footer.css'

const Footer = ({ year = new Date().getFullYear() }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>DevOps Pipeline Demo</h3>
          <p>
            A complete CI/CD pipeline example with React, Docker, and
            Kubernetes.
          </p>
        </div>
        <div className="footer-section">
          <h4>Technologies</h4>
          <ul className="tech-list">
            <li>React + Vite</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Jenkins</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <div className="footer-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://jenkins.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jenkins
            </a>
            <a
              href="https://kubernetes.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kubernetes
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} DevOps Pipeline Demo. Built for learning purposes.</p>
      </div>
    </footer>
  )
}

export default Footer
