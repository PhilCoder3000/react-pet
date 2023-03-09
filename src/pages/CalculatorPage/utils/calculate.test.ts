import { calculate } from './calculate'

describe('Calculator calculate', () => {
  test('sum', () => {
    const value = "10 + 5"
    const result = calculate(value)
    expect(result).toBe(15)
  })

  test('minus', () => {
    const value = "10 - 5"
    const result = calculate(value)
    expect(result).toBe(5)
  })

  test('multi', () => {
    const value = "10 * 5"
    const result = calculate(value)
    expect(result).toBe(50)
  })
  
  test('divide', () => {
    const value = "10 / 5"
    const result = calculate(value)
    expect(result).toBe(2)
  })

  test('all', () => {
    const value = "10 + 5 - 5 * 4 / 2"
    const result = calculate(value)
    expect(result).toBe(5)
  })

  test('all with parenthesis', () => {
    const value = "10 + (5 - 4) * 4 / 2"
    const result = calculate(value)
    expect(result).toBe(12)
  })
})