import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import {
  createAnimation,
  animations,
  getAnimationCSS,
  createScrollAnimationObserver,
  staggerAnimation,
  transition,
  transitions,
  performanceUtils,
} from './animations'

describe('Animation Utilities', () => {
  describe('createAnimation', () => {
    it('should create CSS keyframe string', () => {
      const keyframes = {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      }

      const result = createAnimation('slideIn', keyframes)
      expect(result).toContain('@keyframes slideIn')
      expect(result).toContain('0% { opacity: 0; transform: translateY(20px) }')
      expect(result).toContain('100% { opacity: 1; transform: translateY(0) }')
    })

    it('should handle multiple keyframe percentages', () => {
      const keyframes = {
        '0%': { opacity: '0' },
        '50%': { opacity: '0.5' },
        '100%': { opacity: '1' },
      }

      const result = createAnimation('fadeInOut', keyframes)
      expect(result).toContain('0% { opacity: 0 }')
      expect(result).toContain('50% { opacity: 0.5 }')
      expect(result).toContain('100% { opacity: 1 }')
    })
  })

  describe('Animation Presets', () => {
    it('should have fade animations', () => {
      expect(animations.fadeIn).toBeDefined()
      expect(animations.fadeOut).toBeDefined()
      expect(animations.fadeIn.name).toBe('fadeIn')
      expect(animations.fadeIn.duration).toBe('0.3s')
    })

    it('should have slide animations', () => {
      expect(animations.slideInUp).toBeDefined()
      expect(animations.slideInDown).toBeDefined()
      expect(animations.slideInLeft).toBeDefined()
      expect(animations.slideInRight).toBeDefined()
    })

    it('should have scale animations', () => {
      expect(animations.scaleIn).toBeDefined()
      expect(animations.scaleOut).toBeDefined()
      expect(animations.scaleIn.keyframes['0%']).toEqual({
        transform: 'scale(0.9)',
        opacity: '0',
      })
    })

    it('should have rotation animations', () => {
      expect(animations.spin).toBeDefined()
      expect(animations.spinSlow).toBeDefined()
      expect(animations.spin.duration).toBe('1s')
      expect(animations.spinSlow.duration).toBe('3s')
    })

    it('should have pulse and heartbeat animations', () => {
      expect(animations.pulse).toBeDefined()
      expect(animations.heartbeat).toBeDefined()
    })

    it('should have bounce and shake animations', () => {
      expect(animations.bounce).toBeDefined()
      expect(animations.shake).toBeDefined()
    })

    it('should have float and glow animations', () => {
      expect(animations.float).toBeDefined()
      expect(animations.glow).toBeDefined()
    })
  })

  describe('getAnimationCSS', () => {
    it('should generate CSS animation string with defaults', () => {
      const result = getAnimationCSS('fadeIn')
      expect(result).toContain('fadeIn')
      expect(result).toContain('0.3s')
      expect(result).toContain('ease-out')
    })

    it('should accept custom options', () => {
      const result = getAnimationCSS('fadeIn', {
        duration: '0.5s',
        easing: 'ease-in',
        delay: '0.1s',
        iterationCount: 'infinite',
      })

      expect(result).toContain('fadeIn 0.5s ease-in 0.1s infinite normal both')
    })

    it('should return empty string for non-existent animation', () => {
      const result = getAnimationCSS('nonExistent')
      expect(result).toBe('')
    })
  })

  describe('createScrollAnimationObserver', () => {
    beforeEach(() => {
      global.IntersectionObserver = vi.fn(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }))
    })

    it('should create intersection observer with default options', () => {
      const observer = createScrollAnimationObserver()
      expect(IntersectionObserver).toHaveBeenCalledWith(
        expect.any(Function),
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      )
    })

    it('should create intersection observer with custom options', () => {
      const observer = createScrollAnimationObserver({
        threshold: 0.5,
        rootMargin: '10px',
        animationClass: 'custom-animate',
      })

      expect(IntersectionObserver).toHaveBeenCalledWith(
        expect.any(Function),
        {
          threshold: 0.5,
          rootMargin: '10px',
        }
      )
    })
  })

  describe('staggerAnimation', () => {
    let mockElements

    beforeEach(() => {
      mockElements = [
        { style: { animationDelay: '' } },
        { style: { animationDelay: '' } },
        { style: { animationDelay: '' } },
      ]
    })

    it('should apply staggered delays to elements', () => {
      staggerAnimation(mockElements, 0, 100)

      expect(mockElements[0].style.animationDelay).toBe('0ms')
      expect(mockElements[1].style.animationDelay).toBe('100ms')
      expect(mockElements[2].style.animationDelay).toBe('200ms')
    })

    it('should handle custom base delay', () => {
      staggerAnimation(mockElements, 200, 50)

      expect(mockElements[0].style.animationDelay).toBe('200ms')
      expect(mockElements[1].style.animationDelay).toBe('250ms')
      expect(mockElements[2].style.animationDelay).toBe('300ms')
    })
  })

  describe('transition', () => {
    it('should generate transition string for single property', () => {
      const result = transition('opacity', '0.3s', 'ease', '0s')
      expect(result).toBe('opacity 0.3s ease 0s')
    })

    it('should generate transition string for multiple properties', () => {
      const result = transition(['opacity', 'transform'], '0.3s', 'ease', '0s')
      expect(result).toBe('opacity 0.3s ease 0s, transform 0.3s ease 0s')
    })

    it('should use default values', () => {
      const result = transition()
      expect(result).toBe('all 0.3s ease 0s')
    })
  })

  describe('Transition Presets', () => {
    it('should provide transition presets', () => {
      expect(transitions.fast).toBeDefined()
      expect(transitions.normal).toBeDefined()
      expect(transitions.slow).toBeDefined()
      expect(transitions.transform).toBeDefined()
      expect(transitions.opacity).toBeDefined()
      expect(transitions.colors).toBeDefined()
    })

    it('should have correct transition values', () => {
      expect(transitions.fast).toContain('0.15s')
      expect(transitions.normal).toContain('0.3s')
      expect(transitions.slow).toContain('0.5s')
      expect(transitions.transform).toContain('transform')
      expect(transitions.opacity).toContain('opacity')
    })
  })

  describe('Performance Utils', () => {
    let mockElement

    beforeEach(() => {
      mockElement = {
        style: {
          transform: '',
          willChange: '',
        },
      }
    })

    describe('enableHardwareAcceleration', () => {
      it('should enable hardware acceleration', () => {
        performanceUtils.enableHardwareAcceleration(mockElement)

        expect(mockElement.style.transform).toBe('translate3d(0, 0, 0)')
        expect(mockElement.style.willChange).toBe('transform')
      })
    })

    describe('disableHardwareAcceleration', () => {
      it('should disable hardware acceleration', () => {
        mockElement.style.transform = 'translate3d(0, 0, 0)'
        mockElement.style.willChange = 'transform'

        performanceUtils.disableHardwareAcceleration(mockElement)

        expect(mockElement.style.transform).toBe('')
        expect(mockElement.style.willChange).toBe('auto')
      })
    })

    describe('optimizeForRepaints', () => {
      it('should optimize for repaints', () => {
        performanceUtils.optimizeForRepaints(mockElement)

        expect(mockElement.style.willChange).toBe('transform, opacity')
      })
    })
  })

  describe('Integration Tests', () => {
    it('should work together for complex animations', () => {
      const animationName = 'slideInUp'
      const animationCSS = getAnimationCSS(animationName, {
        duration: '0.5s',
        delay: '0.1s',
      })

      expect(animationCSS).toContain('slideInUp')
      expect(animationCSS).toContain('0.5s')
      expect(animationCSS).toContain('0.1s')
    })

    it('should support chaining transitions and animations', () => {
      const transitionCSS = transition(['transform', 'opacity'], '0.3s')
      const animationCSS = getAnimationCSS('fadeIn')

      expect(transitionCSS).toContain('transform 0.3s ease 0s, opacity 0.3s ease 0s')
      expect(animationCSS).toContain('fadeIn')
    })
  })
})
