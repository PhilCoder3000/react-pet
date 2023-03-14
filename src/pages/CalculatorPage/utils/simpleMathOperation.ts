export const simpleMathOperation = (argArray: Array<string | number>) => {
  let array: Array<string | number> = [];
  if (typeof window.structuredClone === 'function') {
    array = structuredClone(argArray);
  } else {
    array = JSON.parse(JSON.stringify(argArray));
  }

  let errorBreaker = array.length;

  while (array.length > 1) {
    errorBreaker -= 1;
    if (errorBreaker === 0) {
      return 'error';
    }
    const exor = array.indexOf('^');
    if (exor >= 0) {
      const i = exor;
      array[i - 1] = Number(array[i - 1]) ** Number(array[i + 1]);
      array.splice(i, 2);
      continue;
    }
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
    const sumIndex = array.indexOf('+');
    if (sumIndex >= 0) {
      const i = sumIndex;
      array[i - 1] = Number(array[i - 1]) + Number(array[i + 1]);
      array.splice(i, 2);
      continue;
    }
    const minusIndex = array.indexOf('-');
    if (minusIndex >= 0) {
      const i = minusIndex;
      array[i - 1] = Number(array[i - 1]) - Number(array[i + 1]);
      array.splice(i, 2);
      continue;
    }
  }
  return array[0];
};
