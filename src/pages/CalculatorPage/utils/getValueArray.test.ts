import { getValueArray } from './getValueArray';

describe('Calculator getValueArray', () => {
  const expectedArray = [
    '10',
    '+',
    '10',
    '-',
    '10',
    '*',
    '10',
    '/',
    '10',
    '^',
    '10',
  ];

  test('all with spaces', () => {
    const value = '10 + 10 - 10 * 10 / 10 ^ 10';
    const array = getValueArray(value);
    expect(array).toStrictEqual(expectedArray);
  });

  test('all without spaces', () => {
    const value = '10+10-10*10/10^10';
    const array = getValueArray(value);
    expect(array).toStrictEqual(expectedArray);
  });

  const expectedArrayWithParenthesis = [
    '10',
    '+',
    '(',
    '10',
    '-',
    '10',
    ')',
    '*',
    '10',
    '/',
    '10',
    '^',
    '10',
  ];

  test('all with spaces and with parenthesis', () => {
    const value = '10 + ( 10 - 10 ) * 10 / 10 ^ 10';
    const array = getValueArray(value);
    expect(array).toStrictEqual(expectedArrayWithParenthesis);
  });

  test('all without spaces and with parenthesis', () => {
    const value = '10+(10-10)*10/10^10';
    const array = getValueArray(value);
    expect(array).toStrictEqual(expectedArrayWithParenthesis);
  });

  test('start with parenthesis', () => {
    const value = '(5 - 4) * 4 / 2';
    const array = getValueArray(value);
    expect(array).toStrictEqual(['(', '5', '-', '4', ')', '*', '4', '/', '2']);
  });

  test('end with parenthesis', () => {
    const value = '4 / 2 * (5 - 4)';
    const array = getValueArray(value);
    expect(array).toStrictEqual(['4', '/', '2', '*', '(', '5', '-', '4', ')']);
  });

  test('float', () => {
    const value = '1.1+(2.2-3.3) * 4.4 / 5.5^6.6';
    const array = getValueArray(value);
    expect(array).toStrictEqual([
      '1.1',
      '+',
      '(',
      '2.2',
      '-',
      '3.3',
      ')',
      '*',
      '4.4',
      '/',
      '5.5',
      '^',
      '6.6',
    ]);
  });

  test('deep parenthesis', () => {
    const value = '10 - ((4 / 2) * (5 - 4))+5';
    const array = getValueArray(value);
    expect(array).toStrictEqual(['10', '-', '(', '(', '4', '/', '2', ')', '*', '(', '5', '-', '4', ')', ')', '+', '5']);
  })
});
