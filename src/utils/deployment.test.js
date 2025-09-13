import { describe, it, expect } from 'vitest'
import {
  formatDeploymentStatus,
  generateDeploymentId,
  isValidDeploymentStatus,
  estimateDeploymentTime,
  formatCount,
} from '../utils/deployment'

describe('Deployment Utilities', () => {
  describe('formatDeploymentStatus', () => {
    it('should format known statuses correctly', () => {
      expect(formatDeploymentStatus('idle')).toBe('Ready to deploy')
      expect(formatDeploymentStatus('deploying')).toBe(
        'Deployment in progress...'
      )
      expect(formatDeploymentStatus('success')).toBe('Deployment successful!')
      expect(formatDeploymentStatus('error')).toBe('Deployment failed')
    })

    it('should handle unknown statuses', () => {
      expect(formatDeploymentStatus('unknown')).toBe('Unknown status')
      expect(formatDeploymentStatus('')).toBe('Unknown status')
      expect(formatDeploymentStatus(null)).toBe('Unknown status')
    })
  })

  describe('generateDeploymentId', () => {
    it('should generate a valid deployment ID', () => {
      const id = generateDeploymentId()
      expect(id).toMatch(/^deploy-\d+-[a-z0-9]+$/)
    })

    it('should generate unique IDs', () => {
      const id1 = generateDeploymentId()
      const id2 = generateDeploymentId()
      expect(id1).not.toBe(id2)
    })
  })

  describe('isValidDeploymentStatus', () => {
    it('should validate correct statuses', () => {
      expect(isValidDeploymentStatus('idle')).toBe(true)
      expect(isValidDeploymentStatus('deploying')).toBe(true)
      expect(isValidDeploymentStatus('success')).toBe(true)
      expect(isValidDeploymentStatus('error')).toBe(true)
    })

    it('should reject invalid statuses', () => {
      expect(isValidDeploymentStatus('invalid')).toBe(false)
      expect(isValidDeploymentStatus('')).toBe(false)
      expect(isValidDeploymentStatus(null)).toBe(false)
      expect(isValidDeploymentStatus(undefined)).toBe(false)
    })
  })

  describe('estimateDeploymentTime', () => {
    it('should calculate correct deployment times', () => {
      expect(estimateDeploymentTime(1)).toBe(35) // 30 + (1 * 5)
      expect(estimateDeploymentTime(5)).toBe(55) // 30 + (5 * 5)
      expect(estimateDeploymentTime(10)).toBe(80) // 30 + (10 * 5)
    })

    it('should handle edge cases', () => {
      expect(estimateDeploymentTime(0)).toBe(30)
      expect(estimateDeploymentTime(-1)).toBe(30)
      expect(estimateDeploymentTime('invalid')).toBe(30)
      expect(estimateDeploymentTime(null)).toBe(30)
    })

    it('should round up decimal results', () => {
      expect(estimateDeploymentTime(0.1)).toBe(31) // Math.ceil(30.5)
    })
  })

  describe('formatCount', () => {
    it('should format singular counts correctly', () => {
      expect(formatCount(1, 'item')).toBe('1 item')
      expect(formatCount(1, 'test')).toBe('1 test')
    })

    it('should format plural counts correctly', () => {
      expect(formatCount(0, 'item')).toBe('0 items')
      expect(formatCount(2, 'item')).toBe('2 items')
      expect(formatCount(10, 'test')).toBe('10 tests')
    })

    it('should use custom plural forms', () => {
      expect(formatCount(2, 'child', 'children')).toBe('2 children')
      expect(formatCount(1, 'child', 'children')).toBe('1 child')
    })

    it('should handle invalid inputs', () => {
      expect(formatCount('invalid', 'item')).toBe('0 items')
      expect(formatCount(null, 'item')).toBe('0 items')
      expect(formatCount(undefined, 'item')).toBe('0 items')
    })
  })
})
