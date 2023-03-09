import { simpleMathOperation } from './simpleMathOperation'

describe('Calculator simpleMathOperation', () => {
  test('plus', () => {
    const valueArray = ['10', '+', '5']
    const result = simpleMathOperation(valueArray)
    expect(result).toBe(15)
  })

  test('minus', () => {
    const valueArray = ['10', '-', '5']
    const result = simpleMathOperation(valueArray)
    expect(result).toBe(5)
  })

  test('multi', () => {
    const valueArray = ['10', '*', '5']
    const result = simpleMathOperation(valueArray)
    expect(result).toBe(50)
  })

  test('divide', () => {
    const valueArray = ['10', '/', '5']
    const result = simpleMathOperation(valueArray)
    expect(result).toBe(2)
  })

  test('all', () => {
    const valueArray = ['10', '+', '5', '-', '2', '*', '4', '/' , '2']
    const result = simpleMathOperation(valueArray)
    expect(result).toBe(11)
  })
})