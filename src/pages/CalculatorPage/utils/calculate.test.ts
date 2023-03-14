import { calculate } from './calculate'

describe('Calculator calculate', () => {
  test('simple operations', () => {
    const value = "10 + 5 - 5 * 4 / 2"
    const result = calculate(value)
    expect(result).toBe(5)
  })

  test('simple operations with parenthesis', () => {
    const value = "10 + (5 - 4) * 4 / 2"
    const result = calculate(value)
    expect(result).toBe(12)
  })

  test('simple operations with deep parenthesis', () => {
    const value = "10 * 5 + (10 + (2 * 3) - 4) - (10 * 2)"
    const result = calculate(value)
    expect(result).toBe(42)
  })

  test('square', () => {
    const value = "10 + (5^2 - 4^2) - 5"
    const result = calculate(value)
    expect(result).toBe(14)
  })
})