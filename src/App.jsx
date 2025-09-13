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
        <section className="hero-section">
          <div className="logo-container">
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h2>Welcome to the DevOps Pipeline Demo</h2>
          <p className="hero-description">
            This application demonstrates a complete CI/CD pipeline
            implementation using modern DevOps tools and practices.
          </p>
        </section>

        <section className="demo-section">
          <h3>Interactive Demo</h3>
          <div className="demo-card">
            <div className="counter-demo">
              <h4>Counter Example</h4>
              <p>Click the button to increment the counter:</p>
              <Button
                variant="primary"
                size="large"
                onClick={() => setCount(count => count + 1)}
              >
                Count is {count}
              </Button>
            </div>

            <div className="pipeline-demo">
              <h4>Pipeline Actions</h4>
              <div className="button-group">
                <Button
                  variant="success"
                  onClick={handleTest}
                  disabled={deploymentStatus === 'deploying'}
                >
                  Run Tests
                </Button>
                <Button
                  variant={
                    deploymentStatus === 'success' ? 'success' : 'primary'
                  }
                  onClick={handleDeploy}
                  disabled={deploymentStatus === 'deploying'}
                >
                  {deploymentStatus === 'deploying'
                    ? 'Deploying...'
                    : deploymentStatus === 'success'
                      ? 'Deployed ✅'
                      : 'Deploy App'}
                </Button>
                <Button variant="outline" onClick={() => setCount(0)}>
                  Reset Counter
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h3>DevOps Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <h4>🐳 Containerization</h4>
              <p>Multi-stage Dockerfile with optimized build caching</p>
            </div>
            <div className="feature-card">
              <h4>☸️ Kubernetes</h4>
              <p>Complete K8s manifests with blue-green deployment</p>
            </div>
            <div className="feature-card">
              <h4>🔧 Jenkins CI/CD</h4>
              <p>Automated pipeline with testing and deployment</p>
            </div>
            <div className="feature-card">
              <h4>📊 Monitoring</h4>
              <p>Comprehensive logging and health checks</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
