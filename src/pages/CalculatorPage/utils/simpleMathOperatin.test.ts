import { simpleMathOperation } from './simpleMathOperation';

describe('Calculator simpleMathOperation', () => {
  test('simple operation', () => {
    const valueArray = ['10', '+', '5', '-', '2', '*', '3', '/', '2'];
    const result = simpleMathOperation(valueArray);
    expect(result).toBe(12);
  });

  test('with square', () => {
    const valueArray = ['2', '^', '3', '+', '3', '^', '2'];
    const result = simpleMathOperation(valueArray);
    expect(result).toBe(17);
  });
});
