import { useState } from 'react'
import './Button.css'

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  icon,
  loading = false,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const baseClass = 'btn'
  const variantClass = `btn--${variant}`
  const sizeClass = `btn--${size}`
  const disabledClass = disabled ? 'btn--disabled' : ''
  const loadingClass = loading ? 'btn--loading' : ''
  const pressedClass = isPressed ? 'btn--pressed' : ''

  const classes = [
    baseClass,
    variantClass,
    sizeClass,
    disabledClass,
    loadingClass,
    pressedClass,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleMouseDown = () => setIsPressed(true)
  const handleMouseUp = () => setIsPressed(false)
  const handleMouseLeave = () => setIsPressed(false)

  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e)
    }
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="btn-content">
        {loading && <div className="btn-spinner" />}
        {icon && !loading && <span className="btn-icon">{icon}</span>}
        <span className="btn-text">{children}</span>
      </div>
      <div className="btn-ripple" />
      <div className="btn-glow" />
    </button>
  )
}

export default Button
