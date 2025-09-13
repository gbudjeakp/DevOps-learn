/**
 * Theme utilities for consistent styling across the application
 */

// Color palette
export const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  danger: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
}

// Spacing scale
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '5rem',
  '5xl': '6rem',
}



// Typography scale
export const typography = {
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },
  fontWeight: {
    thin: '100',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },
}

// Border radius scale
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
}

// Shadow scale
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
}

// Animation duration scale
export const duration = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  75: '75ms',
  100: '100ms',
  150: '150ms',
  200: '200ms',
  300: '300ms',
  500: '500ms',
  700: '700ms',
  1000: '1000ms',
}

// Easing functions
export const easing = {
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
}

/**
 * Generate a CSS gradient string
 * @param {string} direction - The gradient direction
 * @param {...string} colorStops - Color stops as rest parameters
 * @returns {string} CSS gradient string
 */
export const gradient = (direction = '135deg', ...colorStops) => {
  return `linear-gradient(${direction}, ${colorStops.join(', ')})`
}

/**
 * Generate a glass morphism effect
 * @param {number} blur - Blur amount in pixels
 * @param {number} opacity - Background opacity (0-1)
 * @returns {object} CSS properties object
 */
export const glassMorphism = (blur = 10, opacity = 0.1) => ({
  backdropFilter: `blur(${blur}px)`,
  background: `rgba(255, 255, 255, ${opacity})`,
  border: '1px solid rgba(255, 255, 255, 0.2)',
})

/**
 * Generate a card shadow based on elevation
 * @param {number} elevation - Elevation level (1-5)
 * @returns {string} CSS box-shadow string
 */
export const cardShadow = (elevation = 1) => {
  const shadowMap = {
    1: '0 2px 4px rgba(0, 0, 0, 0.05)',
    2: '0 4px 8px rgba(0, 0, 0, 0.1)',
    3: '0 8px 16px rgba(0, 0, 0, 0.15)',
    4: '0 16px 32px rgba(0, 0, 0, 0.2)',
    5: '0 32px 64px rgba(0, 0, 0, 0.25)',
  }
  return shadowMap[elevation] || shadowMap[1]
}

/**
 * Get responsive breakpoint values
 * @returns {object} Breakpoint values
 */
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

/**
 * Generate a media query string
 * @param {string} breakpoint - The breakpoint key
 * @param {string} type - The media query type ('min' or 'max')
 * @returns {string} Media query string
 */
export const mediaQuery = (breakpoint, type = 'min') => {
  const width = breakpoints[breakpoint]
  return `@media (${type}-width: ${width})`
}

/**
 * Convert pixels to rem units
 * @param {number} pixels - Pixel value
 * @param {number} base - Base font size (default 16)
 * @returns {string} rem value
 */
export const rem = (pixels, base = 16) => {
  return `${pixels / base}rem`
}

/**
 * Convert pixels to em units
 * @param {number} pixels - Pixel value  
 * @param {number} base - Base font size (default 16)
 * @returns {string} em value
 */
export const em = (pixels, base = 16) => {
  return `${pixels / base}em`
}

/**
 * Theme configuration object
 */
export const theme = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  duration,
  easing,
  breakpoints,
  utils: {
    gradient,
    glassMorphism,
    cardShadow,
    mediaQuery,
    rem,
    em,
  },
}
