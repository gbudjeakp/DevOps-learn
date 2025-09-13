import { useState } from 'react'
import { Header, Footer, Button } from './components'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [deploymentStatus, setDeploymentStatus] = useState('idle')

  const handleDeploy = () => {
    setDeploymentStatus('deploying')
    // Simulate deployment process
    setTimeout(() => {
      setDeploymentStatus('success')
      setTimeout(() => setDeploymentStatus('idle'), 3000)
    }, 2000)
  }

  const handleTest = () => {
    alert('Running tests... All tests passed! ✅')
  }

  return (
    <div className="app">
      <Header
        title="Jenkins CI/CD Pipeline Demo"
        subtitle="A complete DevOps example with React, Docker & Kubernetes"
      />

      <main className="main-content">
        <section className="hero-section" id="home">
          <div className="hero-background">
            <div className="hero-gradient" />
            <div className="hero-pattern" />
          </div>
          
          <div className="hero-content">
            <div className="hero-badges">
              <div className="hero-badge">
                <span className="badge-icon">⚡</span>
                <span className="badge-text">Fast</span>
              </div>
              <div className="hero-badge">
                <span className="badge-icon">🔒</span>
                <span className="badge-text">Secure</span>
              </div>
              <div className="hero-badge">
                <span className="badge-icon">📈</span>
                <span className="badge-text">Scalable</span>
              </div>
            </div>
            
            <div className="hero-text">
              <h2 className="hero-title">
                Welcome to the 
                <span className="title-highlight"> DevOps Pipeline </span>
                Demo
              </h2>
              <p className="hero-description">
                Experience a complete CI/CD pipeline implementation showcasing modern 
                DevOps tools and practices. From containerization to orchestration, 
                discover the future of software delivery.
              </p>
            </div>
            
            <div className="hero-actions">
              <Button variant="primary" size="large" icon="🚀">
                Get Started
              </Button>
              <Button variant="outline" size="large" icon="📚">
                Documentation
              </Button>
            </div>
            
            <div className="hero-technologies">
              <div className="tech-logos">
                <div className="tech-logo">
                  <a
                    href="https://vite.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
                </div>
                <div className="tech-logo">
                  <a
                    href="https://react.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={reactLogo} className="logo react" alt="React logo" />
                  </a>
                </div>
              </div>
              <p className="tech-description">
                Built with React 19 + Vite for lightning-fast development
              </p>
            </div>
          </div>
        </section>

        <section className="demo-section" id="demo">
          <div className="section-header">
            <h3 className="section-title">Interactive Demo</h3>
            <p className="section-subtitle">
              Experience the power of modern DevOps with our interactive pipeline simulator
            </p>
          </div>
          
          <div className="demo-cards">
            <div className="demo-card demo-card--primary">
              <div className="card-header">
                <div className="card-icon">🎯</div>
                <h4 className="card-title">Counter Example</h4>
              </div>
              <div className="card-content">
                <p className="card-description">
                  Test React state management with this interactive counter
                </p>
                <div className="counter-display">
                  <span className="counter-label">Current Count:</span>
                  <span className="counter-value">{count}</span>
                </div>
                <Button
                  variant="primary"
                  size="large"
                  onClick={() => setCount(count => count + 1)}
                  icon="+"
                >
                  Increment Counter
                </Button>
              </div>
            </div>

            <div className="demo-card demo-card--secondary">
              <div className="card-header">
                <div className="card-icon">🚀</div>
                <h4 className="card-title">Pipeline Actions</h4>
              </div>
              <div className="card-content">
                <p className="card-description">
                  Simulate CI/CD pipeline operations with realistic delays
                </p>
                <div className="pipeline-status">
                  <span className="status-label">Status:</span>
                  <span className={`status-badge status-badge--${deploymentStatus}`}>
                    {deploymentStatus === 'idle' && 'Ready'}
                    {deploymentStatus === 'deploying' && 'Deploying...'}
                    {deploymentStatus === 'success' && 'Success'}
                  </span>
                </div>
                <div className="button-group">
                  <Button
                    variant="success"
                    onClick={handleTest}
                    disabled={deploymentStatus === 'deploying'}
                    icon="🧪"
                    loading={deploymentStatus === 'deploying'}
                  >
                    Run Tests
                  </Button>
                  <Button
                    variant={deploymentStatus === 'success' ? 'success' : 'primary'}
                    onClick={handleDeploy}
                    disabled={deploymentStatus === 'deploying'}
                    icon={deploymentStatus === 'success' ? '✅' : '🚀'}
                    loading={deploymentStatus === 'deploying'}
                  >
                    {deploymentStatus === 'deploying'
                      ? 'Deploying...'
                      : deploymentStatus === 'success'
                        ? 'Deployed'
                        : 'Deploy App'}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setCount(0)}
                    icon="🔄"
                  >
                    Reset Counter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section" id="about">
          <div className="section-header">
            <h3 className="section-title">DevOps Features</h3>
            <p className="section-subtitle">
              Explore the cutting-edge technologies powering modern software delivery
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card feature-card--docker">
              <div className="feature-icon">🐳</div>
              <div className="feature-content">
                <h4 className="feature-title">Containerization</h4>
                <p className="feature-description">
                  Multi-stage Dockerfile with optimized build caching and minimal footprint
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">Docker</span>
                  <span className="feature-tag">Multi-stage</span>
                  <span className="feature-tag">Optimized</span>
                </div>
              </div>
            </div>
            
            <div className="feature-card feature-card--kubernetes">
              <div className="feature-icon">☸️</div>
              <div className="feature-content">
                <h4 className="feature-title">Kubernetes</h4>
                <p className="feature-description">
                  Complete K8s manifests with blue-green deployment strategy and auto-scaling
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">K8s</span>
                  <span className="feature-tag">Blue-Green</span>
                  <span className="feature-tag">Auto-scale</span>
                </div>
              </div>
            </div>
            
            <div className="feature-card feature-card--jenkins">
              <div className="feature-icon">🔧</div>
              <div className="feature-content">
                <h4 className="feature-title">Jenkins CI/CD</h4>
                <p className="feature-description">
                  Automated pipeline with testing, security scanning, and deployment
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">Pipeline</span>
                  <span className="feature-tag">Testing</span>
                  <span className="feature-tag">Security</span>
                </div>
              </div>
            </div>
            
            <div className="feature-card feature-card--monitoring">
              <div className="feature-icon">📊</div>
              <div className="feature-content">
                <h4 className="feature-title">Monitoring</h4>
                <p className="feature-description">
                  Comprehensive logging, metrics collection, and health check systems
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">Logging</span>
                  <span className="feature-tag">Metrics</span>
                  <span className="feature-tag">Health</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
