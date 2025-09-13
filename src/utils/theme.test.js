import { describe, it, expect } from 'vitest'
import {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  duration,
  easing,
  breakpoints,
  glassMorphism,
  gradient,
  cardShadow,
  mediaQuery,
  rem,
  em,
} from './theme'

describe('Theme Utilities', () => {
  describe('Color System', () => {
    it('should have primary color variants', () => {
      expect(colors.primary).toBeDefined()
      expect(colors.primary['500']).toBe('#0ea5e9')
      expect(colors.primary['100']).toBeDefined()
      expect(colors.primary['900']).toBeDefined()
    })

    it('should have semantic color variants', () => {
      expect(colors.success).toBeDefined()
      expect(colors.danger).toBeDefined()
      expect(colors.warning).toBeDefined()
    })

    it('should have neutral colors', () => {
      expect(colors.neutral).toBeDefined()
      expect(colors.neutral['50']).toBeDefined()
      expect(colors.neutral['900']).toBeDefined()
    })
  })

  describe('Spacing System', () => {
    it('should provide consistent spacing scale', () => {
      expect(spacing.xs).toBe('0.25rem')
      expect(spacing.sm).toBe('0.5rem')
      expect(spacing.md).toBe('1rem')
      expect(spacing.lg).toBe('1.5rem')
      expect(spacing.xl).toBe('2rem')
    })

    it('should provide extended spacing values', () => {
      expect(spacing['2xl']).toBe('3rem')
      expect(spacing['3xl']).toBe('4rem')
      expect(spacing['4xl']).toBe('5rem')
    })
  })

  describe('Typography System', () => {
    it('should provide font size scale', () => {
      expect(typography.fontSize.xs).toBe('0.75rem')
      expect(typography.fontSize.sm).toBe('0.875rem')
      expect(typography.fontSize.base).toBe('1rem')
      expect(typography.fontSize.lg).toBe('1.125rem')
    })

    it('should provide font weights', () => {
      expect(typography.fontWeight.normal).toBe('400')
      expect(typography.fontWeight.medium).toBe('500')
      expect(typography.fontWeight.semibold).toBe('600')
      expect(typography.fontWeight.bold).toBe('700')
    })

    it('should provide line height values', () => {
      expect(typography.lineHeight.tight).toBe('1.25')
      expect(typography.lineHeight.normal).toBe('1.5')
      expect(typography.lineHeight.relaxed).toBe('1.75')
    })
  })

  describe('Border Radius System', () => {
    it('should provide border radius scale', () => {
      expect(borderRadius.none).toBe('0')
      expect(borderRadius.sm).toBe('0.125rem')
      expect(borderRadius.md).toBe('0.375rem')
      expect(borderRadius.lg).toBe('0.5rem')
    })

    it('should provide special radius values', () => {
      expect(borderRadius.full).toBe('9999px')
    })
  })

  describe('Shadow System', () => {
    it('should provide shadow variants', () => {
      expect(shadows.sm).toBeDefined()
      expect(shadows.md).toBeDefined()
      expect(shadows.lg).toBeDefined()
      expect(shadows.xl).toBeDefined()
    })

    it('should provide basic shadows', () => {
      expect(shadows.sm).toBeDefined()
      expect(shadows.md).toBeDefined()
      expect(shadows.lg).toBeDefined()
    })
  })

  describe('Animation System', () => {
    it('should provide animation durations', () => {
      expect(duration.fast).toBe('150ms')
      expect(duration.normal).toBe('300ms')
      expect(duration.slow).toBe('500ms')
    })

    it('should provide easing functions', () => {
      expect(easing.out).toBe('cubic-bezier(0, 0, 0.2, 1)')
      expect(easing.in).toBe('cubic-bezier(0.4, 0, 1, 1)')
      expect(easing.inOut).toBe('cubic-bezier(0.4, 0, 0.2, 1)')
    })
  })

  describe('Breakpoint System', () => {
    it('should provide responsive breakpoints', () => {
      expect(breakpoints.sm).toBe('640px')
      expect(breakpoints.md).toBe('768px')
      expect(breakpoints.lg).toBe('1024px')
      expect(breakpoints.xl).toBe('1280px')
    })
  })

  describe('Utility Functions', () => {
    describe('glassMorphism', () => {
      it('should generate glass morphism CSS', () => {
        const result = glassMorphism()
        expect(result.backdropFilter).toContain('blur(')
        expect(result.background).toContain('rgba(')
        expect(result.border).toBe('1px solid rgba(255, 255, 255, 0.2)')
      })

      it('should accept custom opacity', () => {
        const result = glassMorphism(10, 0.2)
        expect(result.background).toBe('rgba(255, 255, 255, 0.2)')
      })

      it('should accept custom blur', () => {
        const result = glassMorphism(20, 0.1)
        expect(result.backdropFilter).toBe('blur(20px)')
      })
    })

    describe('gradient', () => {
      it('should generate linear gradient', () => {
        const result = gradient('45deg', '#ff0000', '#00ff00')
        expect(result).toBe('linear-gradient(45deg, #ff0000, #00ff00)')
      })

      it('should handle multiple colors', () => {
        const result = gradient('90deg', '#ff0000', '#00ff00', '#0000ff')
        expect(result).toBe('linear-gradient(90deg, #ff0000, #00ff00, #0000ff)')
      })
    })

    describe('cardShadow', () => {
      it('should generate card shadow with elevation', () => {
        const result = cardShadow(2)
        expect(result).toContain('rgba(0, 0, 0,')
        expect(result).toBe('0 4px 8px rgba(0, 0, 0, 0.1)')
      })

      it('should handle different elevations', () => {
        const low = cardShadow(1)
        const high = cardShadow(5)
        expect(low).not.toBe(high)
        expect(high).toContain('rgba(0, 0, 0,')
      })
    })

    describe('mediaQuery', () => {
      it('should generate media query string', () => {
        const result = mediaQuery('md')
        expect(result).toBe('@media (min-width: 768px)')
      })

      it('should handle different breakpoints', () => {
        const sm = mediaQuery('sm')
        const lg = mediaQuery('lg')
        expect(sm).toBe('@media (min-width: 640px)')
        expect(lg).toBe('@media (min-width: 1024px)')
      })
    })

    describe('rem', () => {
      it('should convert pixels to rem', () => {
        const result = rem(16)
        expect(result).toBe('1rem')
      })

      it('should handle different pixel values', () => {
        expect(rem(8)).toBe('0.5rem')
        expect(rem(24)).toBe('1.5rem')
        expect(rem(32)).toBe('2rem')
      })

      it('should handle custom base size', () => {
        const result = rem(20, 10)
        expect(result).toBe('2rem')
      })
    })

    describe('em', () => {
      it('should convert pixels to em', () => {
        const result = em(16)
        expect(result).toBe('1em')
      })

      it('should handle different pixel values', () => {
        expect(em(8)).toBe('0.5em')
        expect(em(24)).toBe('1.5em')
        expect(em(32)).toBe('2em')
      })

      it('should handle custom base size', () => {
        const result = em(20, 10)
        expect(result).toBe('2em')
      })
    })
  })

  describe('Integration Tests', () => {
    it('should work together for component styling', () => {
      const buttonStyle = {
        padding: `${spacing.sm} ${spacing.md}`,
        fontSize: typography.fontSize.sm,
        borderRadius: borderRadius.md,
        boxShadow: shadows.sm,
        background: gradient('135deg', colors.primary['500'], colors.primary['100']),
      }

      expect(buttonStyle.padding).toBe('0.5rem 1rem')
      expect(buttonStyle.fontSize).toBe('0.875rem')
      expect(buttonStyle.borderRadius).toBe('0.375rem')
      expect(buttonStyle.background).toContain('linear-gradient')
    })

    it('should support responsive design patterns', () => {
      const responsiveStyles = {
        padding: spacing.sm,
        [`${mediaQuery('md')}`]: {
          padding: spacing.md,
        },
        [`${mediaQuery('lg')}`]: {
          padding: spacing.lg,
        },
      }

      expect(responsiveStyles.padding).toBe('0.5rem')
      expect(responsiveStyles['@media (min-width: 768px)']).toEqual({
        padding: '1rem',
      })
      expect(responsiveStyles['@media (min-width: 1024px)']).toEqual({
        padding: '1.5rem',
      })
    })
  })
})
