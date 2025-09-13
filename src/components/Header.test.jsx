import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header Component', () => {
  it('should render with default title', () => {
    render(<Header />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Jenkins CI/CD Pipeline Demo'
    )
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should render with custom title', () => {
    const customTitle = 'Custom Application Title'
    render(<Header title={customTitle} />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      customTitle
    )
  })

  it('should render subtitle when provided', () => {
    const subtitle = 'A comprehensive DevOps solution'
    render(<Header subtitle={subtitle} />)

    expect(screen.getByText(subtitle)).toBeInTheDocument()
  })

  it('should not render subtitle when not provided', () => {
    render(<Header />)

    // Check that there's no paragraph element with subtitle class
    const subtitleElement = document.querySelector('.header-subtitle')
    expect(subtitleElement).not.toBeInTheDocument()
  })

  it('should render navigation links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '#home'
    )
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute(
      'href',
      '#about'
    )
    expect(screen.getByRole('link', { name: /demo/i })).toHaveAttribute(
      'href',
      '#demo'
    )
  })

  it('should have proper semantic structure', () => {
    render(<Header title="Test Title" subtitle="Test Subtitle" />)

    const header = screen.getByRole('banner')
    const nav = screen.getByRole('navigation')
    const heading = screen.getByRole('heading', { level: 1 })

    expect(header).toContainElement(nav)
    expect(header).toContainElement(heading)
  })

  it('should apply correct CSS classes', () => {
    render(<Header />)

    const header = screen.getByRole('banner')
    expect(header).toHaveClass('header')

    const headerContent = header.querySelector('.header-content')
    expect(headerContent).toBeInTheDocument()

    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toHaveClass('header-title')
  })
})
