/**
 * Animation utilities and helpers
 */

/**
 * Create a CSS animation keyframe string
 * @param {string} name - Animation name
 * @param {object} keyframes - Keyframe definitions
 * @returns {string} CSS keyframe string
 */
export const createAnimation = (name, keyframes) => {
  const keyframeStrings = Object.entries(keyframes).map(
    ([percentage, styles]) => {
      const styleString = Object.entries(styles)
        .map(([prop, value]) => `${prop}: ${value}`)
        .join('; ')
      return `${percentage} { ${styleString} }`
    }
  )

  return `@keyframes ${name} { ${keyframeStrings.join(' ')} }`
}

/**
 * Predefined animation configurations
 */
export const animations = {
  // Fade animations
  fadeIn: {
    name: 'fadeIn',
    duration: '0.3s',
    easing: 'ease-out',
    keyframes: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
  },
  fadeOut: {
    name: 'fadeOut',
    duration: '0.3s',
    easing: 'ease-in',
    keyframes: {
      '0%': { opacity: '1' },
      '100%': { opacity: '0' },
    },
  },

  // Slide animations
  slideInUp: {
    name: 'slideInUp',
    duration: '0.4s',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    keyframes: {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
  },
  slideInDown: {
    name: 'slideInDown',
    duration: '0.4s',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    keyframes: {
      '0%': { transform: 'translateY(-20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
  },
  slideInLeft: {
    name: 'slideInLeft',
    duration: '0.4s',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    keyframes: {
      '0%': { transform: 'translateX(-20px)', opacity: '0' },
      '100%': { transform: 'translateX(0)', opacity: '1' },
    },
  },
  slideInRight: {
    name: 'slideInRight',
    duration: '0.4s',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    keyframes: {
      '0%': { transform: 'translateX(20px)', opacity: '0' },
      '100%': { transform: 'translateX(0)', opacity: '1' },
    },
  },

  // Scale animations
  scaleIn: {
    name: 'scaleIn',
    duration: '0.3s',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    keyframes: {
      '0%': { transform: 'scale(0.9)', opacity: '0' },
      '100%': { transform: 'scale(1)', opacity: '1' },
    },
  },
  scaleOut: {
    name: 'scaleOut',
    duration: '0.2s',
    easing: 'cubic-bezier(0.4, 0, 1, 1)',
    keyframes: {
      '0%': { transform: 'scale(1)', opacity: '1' },
      '100%': { transform: 'scale(0.9)', opacity: '0' },
    },
  },

  // Rotation animations
  spin: {
    name: 'spin',
    duration: '1s',
    easing: 'linear',
    keyframes: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },
  spinSlow: {
    name: 'spinSlow',
    duration: '3s',
    easing: 'linear',
    keyframes: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },

  // Pulse animations
  pulse: {
    name: 'pulse',
    duration: '2s',
    easing: 'ease-in-out',
    keyframes: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
  },
  heartbeat: {
    name: 'heartbeat',
    duration: '1.5s',
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'scale(1)' },
      '14%': { transform: 'scale(1.1)' },
      '28%': { transform: 'scale(1)' },
      '42%': { transform: 'scale(1.1)' },
      '70%': { transform: 'scale(1)' },
    },
  },

  // Bounce animations
  bounce: {
    name: 'bounce',
    duration: '1s',
    easing: 'ease',
    keyframes: {
      '0%, 20%, 53%, 80%, 100%': {
        transform: 'translate3d(0,0,0)',
      },
      '40%, 43%': {
        transform: 'translate3d(0, -8px, 0)',
      },
      '70%': {
        transform: 'translate3d(0, -4px, 0)',
      },
      '90%': {
        transform: 'translate3d(0, -2px, 0)',
      },
    },
  },

  // Shake animation
  shake: {
    name: 'shake',
    duration: '0.8s',
    easing: 'ease-in-out',
    keyframes: {
      '0%, 100%': { transform: 'translateX(0)' },
      '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
      '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
    },
  },

  // Float animation
  float: {
    name: 'float',
    duration: '3s',
    easing: 'ease-in-out',
    keyframes: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-10px)' },
    },
  },

  // Glow animation
  glow: {
    name: 'glow',
    duration: '2s',
    easing: 'ease-in-out',
    keyframes: {
      '0%, 100%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.5)' },
      '50%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)' },
    },
  },
}

/**
 * Generate CSS animation string
 * @param {string} animationName - Name of the animation
 * @param {object} options - Animation options
 * @returns {string} CSS animation string
 */
export const getAnimationCSS = (
  animationName,
  options = {}
) => {
  const animation = animations[animationName]
  if (!animation) return ''

  const {
    duration = animation.duration,
    easing = animation.easing,
    delay = '0s',
    iterationCount = '1',
    direction = 'normal',
    fillMode = 'both',
  } = options

  return `${animation.name} ${duration} ${easing} ${delay} ${iterationCount} ${direction} ${fillMode}`
}

/**
 * Intersection Observer hook for scroll animations
 * @param {object} options - Observer options
 * @returns {function} Observer callback
 */
export const createScrollAnimationObserver = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationClass = 'animate-in',
  } = options

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass)
        }
      })
    },
    { threshold, rootMargin }
  )
}

/**
 * Stagger animation delays for multiple elements
 * @param {NodeList|Array} elements - Elements to animate
 * @param {number} baseDelay - Base delay in milliseconds
 * @param {number} increment - Delay increment between elements
 */
export const staggerAnimation = (elements, baseDelay = 0, increment = 100) => {
  elements.forEach((element, index) => {
    const delay = baseDelay + index * increment
    element.style.animationDelay = `${delay}ms`
  })
}

/**
 * Generate CSS transition string
 * @param {string|Array} properties - CSS properties to transition
 * @param {string} duration - Transition duration
 * @param {string} easing - Transition easing function
 * @param {string} delay - Transition delay
 * @returns {string} CSS transition string
 */
export const transition = (
  properties = 'all',
  duration = '0.3s',
  easing = 'ease',
  delay = '0s'
) => {
  if (Array.isArray(properties)) {
    return properties
      .map((prop) => `${prop} ${duration} ${easing} ${delay}`)
      .join(', ')
  }
  return `${properties} ${duration} ${easing} ${delay}`
}

/**
 * Common transition presets
 */
export const transitions = {
  fast: transition('all', '0.15s', 'ease-out'),
  normal: transition('all', '0.3s', 'ease'),
  slow: transition('all', '0.5s', 'ease'),
  transform: transition('transform', '0.3s', 'cubic-bezier(0.4, 0, 0.2, 1)'),
  opacity: transition('opacity', '0.3s', 'ease'),
  colors: transition(['background-color', 'border-color', 'color'], '0.3s', 'ease'),
}

/**
 * Performance optimized animation utilities
 */
export const performanceUtils = {
  // Enable hardware acceleration
  enableHardwareAcceleration: (element) => {
    element.style.transform = 'translate3d(0, 0, 0)'
    element.style.willChange = 'transform'
  },

  // Disable hardware acceleration
  disableHardwareAcceleration: (element) => {
    element.style.transform = ''
    element.style.willChange = 'auto'
  },

  // Optimize for repaints
  optimizeForRepaints: (element) => {
    element.style.willChange = 'transform, opacity'
  },
}
