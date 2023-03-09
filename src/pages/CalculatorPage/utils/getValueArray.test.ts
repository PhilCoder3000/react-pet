import { getValueArray } from './getValueArray';

describe('Calculator getValueArray', () => {
  test('plus', () => {
    const value = '10 + 10';
    const array = getValueArray(value);
    expect(array).toStrictEqual(['10', '+', '10']);
  });

  test('minus', () => {
    const value = '10 - 10';
    const array = getValueArray(value);
    expect(array).toStrictEqual(['10', '-', '10']);
  });

  test('multi', () => {
    const value = '10 * 10';
    const array = getValueArray(value);
    expect(array).toStrictEqual(['10', '*', '10']);
  });

  test('divider', () => {
    const value = '10 / 10';
    const array = getValueArray(value);
    expect(array).toStrictEqual(['10', '/', '10']);
  });

  test('square', () => {
    const value = '10 ^ 10';
    const array = getValueArray(value);
    expect(array).toStrictEqual(['10', '^', '10']);
  });

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
});
