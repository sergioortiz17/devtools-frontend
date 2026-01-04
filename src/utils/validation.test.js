import { describe, it, expect } from 'vitest'
import { isNotEmpty, isPositive, isValidNumber } from './validation'

describe('validation utilities', () => {
  describe('isNotEmpty', () => {
    it('should return true for non-empty string', () => {
      expect(isNotEmpty('hello')).toBe(true)
      expect(isNotEmpty('test')).toBe(true)
    })

    it('should return false for empty string', () => {
      expect(isNotEmpty('')).toBe(false)
      expect(isNotEmpty('   ')).toBe(false)
    })

    it('should return false for null or undefined', () => {
      expect(isNotEmpty(null)).toBe(false)
      expect(isNotEmpty(undefined)).toBe(false)
    })

    it('should trim whitespace before checking', () => {
      expect(isNotEmpty('  hello  ')).toBe(true)
      expect(isNotEmpty('  ')).toBe(false)
    })
  })

  describe('isPositive', () => {
    it('should return true for positive numbers', () => {
      expect(isPositive(1)).toBe(true)
      expect(isPositive(100)).toBe(true)
      expect(isPositive(0)).toBe(true)
    })

    it('should return false for negative numbers', () => {
      expect(isPositive(-1)).toBe(false)
      expect(isPositive(-100)).toBe(false)
    })

    it('should return false for non-numbers', () => {
      expect(isPositive('abc')).toBe(false)
      expect(isPositive(null)).toBe(false)
      expect(isPositive(undefined)).toBe(false)
    })
  })

  describe('isValidNumber', () => {
    it('should return true for valid numbers', () => {
      expect(isValidNumber(1)).toBe(true)
      expect(isValidNumber(0)).toBe(true)
      expect(isValidNumber(-1)).toBe(true)
      expect(isValidNumber(3.14)).toBe(true)
      expect(isValidNumber('123')).toBe(true)
    })

    it('should return false for invalid numbers', () => {
      expect(isValidNumber('abc')).toBe(false)
      expect(isValidNumber(NaN)).toBe(false)
      expect(isValidNumber(Infinity)).toBe(false)
      expect(isValidNumber(null)).toBe(false)
      expect(isValidNumber(undefined)).toBe(false)
    })
  })
})

