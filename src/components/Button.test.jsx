import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button Component', () => {
  it('should render with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('btn', 'btn--primary', 'btn--medium')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('should render different variants correctly', () => {
    const { rerender } = render(<Button variant="secondary">Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn--secondary')

    rerender(<Button variant="success">Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn--success')

    rerender(<Button variant="danger">Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn--danger')

    rerender(<Button variant="outline">Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn--outline')
  })

  it('should render different sizes correctly', () => {
    const { rerender } = render(<Button size="small">Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn--small')

    rerender(<Button size="large">Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn--large')
  })

  it('should handle disabled state', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
    expect(button).toHaveClass('btn--disabled')
  })

  it('should handle click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should not trigger click when disabled', () => {
    const handleClick = vi.fn()
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(handleClick).not.toHaveBeenCalled()
  })

  it('should apply custom className', () => {
    render(<Button className="custom-class">Test</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('custom-class')
    expect(button).toHaveClass('btn', 'btn--primary', 'btn--medium')
  })

  it('should support different button types', () => {
    render(<Button type="submit">Submit</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveAttribute('type', 'submit')
  })

  it('should pass through additional props', () => {
    render(
      <Button data-testid="custom-button" aria-label="Custom label">
        Test
      </Button>
    )
    const button = screen.getByRole('button')

    expect(button).toHaveAttribute('data-testid', 'custom-button')
    expect(button).toHaveAttribute('aria-label', 'Custom label')
  })

  it('should render children correctly', () => {
    render(
      <Button>
        <span>Icon</span>
        <span>Text</span>
      </Button>
    )

    expect(screen.getByText('Icon')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
})
