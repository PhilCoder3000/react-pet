import { classnames } from './classnames';

describe('classnames', () => {
  test('String arg', () => {
    const res = classnames('a');
    expect(res).toBe('a');
  });

  test('Double string arg', () => {
    const res = classnames('a', 'b');
    expect(res).toBe('a b');
  });

  test('Array args', () => {
    const res = classnames(['a', 'b', 'c', 'd']);
    expect(res).toBe('a b c d');
  });

  test('String and single array args', () => {
    const res = classnames('a', ['b']);
    expect(res).toBe('a b');
  });

  test('String and long array args', () => {
    const res = classnames('a', ['b', 'c', 'd']);
    expect(res).toBe('a b c d');
  });

  test('Object arg', () => {
    let res = classnames({ a: true });
    expect(res).toBe('a');

    res = classnames({ a: true, b: false });
    expect(res).toBe('a');
  });

  test('Object and string args', () => {
    let res = classnames({ a: true }, 'c');
    expect(res).toBe('a c');

    res = classnames({ a: true, b: false }, 'c');
    expect(res).toBe('a c');
  });  

  test('Object, string and array args', () => {
    const obj = {a: false, b: true, c: false};
    const array = ['x', 'y', 'z'];
    const str = 'str'

    let res = classnames(obj, array, str);
    expect(res).toBe('b x y z str');

    res = classnames(str, array, obj);
    expect(res).toBe('str x y z b');
  });  
});
