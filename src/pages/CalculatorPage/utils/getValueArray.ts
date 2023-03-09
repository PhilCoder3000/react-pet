const operators = ['+', '-', '*', '/', '(', ')', '^'];

export const getValueArray = (value: string) => {
  const result: string[] = [];
  let newItem = '';

  for (let i = 0; i < value.length; i++) {
    const elem = value[i];
    if (operators.includes(elem)) {
      if (newItem !== '') {
        result.push(newItem)
        newItem = '';
      }
      result.push(elem);
    } else if (elem !== '' && elem !== ' ') {
      newItem += elem;
    } else if (newItem !== '') {
      result.push(newItem);
      newItem = '';
    }
  }
  if (newItem !== '') {
    result.push(newItem)
  }
  return result;
};
