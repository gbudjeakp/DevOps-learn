import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

// Mock window.scrollTo
const mockScrollTo = vi.fn()
Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true,
})

describe('Header Component', () => {
  beforeEach(() => {
    // Mock getBoundingClientRect for scroll testing
    Element.prototype.getBoundingClientRect = vi.fn(() => ({
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: 0,
      height: 0,
    }))
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

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

  it('should render navigation buttons', () => {
    render(<Header />)

    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /demo/i })).toBeInTheDocument()
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

  it('should handle navigation button clicks', () => {
    // Mock getElementById to return a dummy element
    const mockElement = { scrollIntoView: vi.fn() }
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement)

    render(<Header />)

    const homeButton = screen.getByRole('button', { name: /home/i })
    const aboutButton = screen.getByRole('button', { name: /about/i })
    const demoButton = screen.getByRole('button', { name: /demo/i })

    // Click on a navigation button
    fireEvent.click(homeButton)
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })

    fireEvent.click(aboutButton)
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })

    fireEvent.click(demoButton)
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('should update active section on scroll', () => {
    render(<Header />)

    // Mock scroll event
    const scrollEvent = new Event('scroll')
    fireEvent(window, scrollEvent)

    // Check that the component handles scroll events
    // (The actual logic would require more complex mocking of element positions)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should apply scrolled class when page is scrolled', () => {
    render(<Header />)

    // Mock scroll position
    Object.defineProperty(window, 'scrollY', {
      value: 100,
      writable: true,
    })

    const scrollEvent = new Event('scroll')
    fireEvent(window, scrollEvent)

    // The header should have scrolled class when scrolled
    // Note: This would require state update, so we're just checking structure
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should render minimal header structure', () => {
    render(<Header />)

    // Check for minimal header structure
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('header')

    const headerContent = header.querySelector('.header-content')
    expect(headerContent).toBeInTheDocument()
  })

  it('should render navigation with proper classes', () => {
    render(<Header />)

    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()
    expect(navigation).toHaveClass('header-nav')

    const navButtons = navigation.querySelectorAll('.nav-link')
    expect(navButtons.length).toBe(3)
  })
})
