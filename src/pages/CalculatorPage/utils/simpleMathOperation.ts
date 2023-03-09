export const simpleMathOperation = (argArray: Array<string | number>) => {
  let array: Array<string | number> = [];
  if (typeof window.structuredClone === 'function') {
    array = structuredClone(argArray);
  } else {
    array = JSON.parse(JSON.stringify(argArray));
  }

  while (array.length > 1) {
    const multiIndex = array.indexOf('*');
    if (multiIndex >= 0) {
      const i = multiIndex;
      array[i - 1] = Number(array[i - 1]) * Number(array[i + 1]);
      array.splice(i, 2);
      continue;
    }
    const divIndex = array.indexOf('/');
    if (divIndex >= 0) {
      const i = divIndex;
      array[i - 1] = Number(array[i - 1]) / Number(array[i + 1]);
      array.splice(i, 2);
      continue;
    }
    for (let i = 0; i < array.length; i++) {
      const elem = array[i];
      if (elem === '/') {
        array[i - 1] = Number(array[i - 1]) / Number(array[i + 1]);
        array.splice(i, 2);
        break;
      }
      if (elem === '+') {
        array[i - 1] = Number(array[i - 1]) + Number(array[i + 1]);
        array.splice(i, 2);
        break;
      }
      if (elem === '-') {
        array[i - 1] = Number(array[i - 1]) - Number(array[i + 1]);
        array.splice(i, 2);
        break;
      }
    }
  }
  return array[0];
};
