import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer Component', () => {
  it('should render with default content', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('footer')
  })

  it('should render technologies section', () => {
    render(<Footer />)

    expect(screen.getByText('Technologies')).toBeInTheDocument()
    
    // Check for technology items in the tech grid specifically
    const techGrid = document.querySelector('.tech-grid')
    expect(techGrid).toBeInTheDocument()
    expect(techGrid.textContent).toContain('Jenkins')
    expect(techGrid.textContent).toContain('Docker')
    expect(techGrid.textContent).toContain('Kubernetes')
    expect(techGrid.textContent).toContain('React + Vite')
  })

  it('should render resources section', () => {
    render(<Footer />)

    expect(screen.getByText('Resources')).toBeInTheDocument()
    
    // Check for resource links
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /jenkins/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /kubernetes/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /docker/i })).toBeInTheDocument()
  })

  it('should render brand section', () => {
    render(<Footer />)

    expect(screen.getByText('DevOps Pipeline Demo')).toBeInTheDocument()
    expect(screen.getByText(/A complete CI\/CD pipeline example/i)).toBeInTheDocument()
  })

  it('should render copyright information', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    
    // Check for copyright specifically in the footer-bottom section
    const footerBottom = document.querySelector('.footer-bottom')
    expect(footerBottom).toBeInTheDocument()
    expect(footerBottom.textContent).toMatch(new RegExp(`© ${currentYear}`, 'i'))
    expect(footerBottom.textContent).toMatch(/built with ❤️ for learning purposes/i)
  })

  it('should have proper semantic structure', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const sections = footer.querySelectorAll('.footer-section')
    
    expect(sections.length).toBeGreaterThan(0)
    expect(footer.querySelector('.footer-bottom')).toBeInTheDocument()
  })

  it('should apply correct CSS classes', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('footer')

    const footerContent = footer.querySelector('.footer-content')
    expect(footerContent).toBeInTheDocument()

    const techGrid = footer.querySelector('.tech-grid')
    expect(techGrid).toBeInTheDocument()
  })

  it('should render technology items with icons', () => {
    render(<Footer />)

    const techItems = document.querySelectorAll('.tech-item')
    expect(techItems.length).toBeGreaterThan(0)

    // Each tech item should have an icon and name
    techItems.forEach(item => {
      expect(item.querySelector('.tech-icon')).toBeInTheDocument()
      expect(item.querySelector('.tech-name')).toBeInTheDocument()
    })
  })

  it('should have external links with proper attributes', () => {
    render(<Footer />)

    const externalLinks = screen.getAllByRole('link').filter(link => 
      link.getAttribute('href')?.startsWith('http')
    )

    externalLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('should render responsive layout elements', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const footerMain = footer.querySelector('.footer-main')
    
    expect(footerMain).toBeInTheDocument()
    expect(footerMain).toHaveClass('footer-main')
  })

  it('should handle missing sections gracefully', () => {
    // Test that footer renders even if some content is missing
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    
    // Should always have at least the copyright section
    expect(screen.getByText(new RegExp('©', 'i'))).toBeInTheDocument()
  })
})
