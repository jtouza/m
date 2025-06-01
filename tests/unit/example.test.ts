import { describe, it, expect } from 'vitest'

describe('Example test', () => {
  it('should pass basic assertions', () => {
    // Basic assertions
    expect(true).toBe(true)
    expect(1 + 1).toBe(2)
    expect('hello').toContain('ell')
    
    // Array assertions
    const arr = [1, 2, 3]
    expect(arr).toHaveLength(3)
    expect(arr).toContain(2)
    
    // Object assertions
    const obj = { name: 'test', value: 42 }
    expect(obj).toHaveProperty('name')
    expect(obj.name).toBe('test')
    expect(obj.value).toBeGreaterThan(40)
  })
})