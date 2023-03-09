import { getValueArray } from './getValueArray';
import { simpleMathOperation } from './simpleMathOperation';

const openingParenthesis = '(';
const closingParenthesis = ')';

export const calculate = (value: string) => {
  const openingParenthesisIndex = value.indexOf(openingParenthesis);
  const closingParenthesisIndex = value.indexOf(closingParenthesis);
  if (openingParenthesisIndex >= 0) {
    if (closingParenthesisIndex < openingParenthesisIndex) {
      value =
        calculate(value.slice(0, closingParenthesisIndex)) +
        value.slice(closingParenthesisIndex + 1);
    } else {
      value =
        value.slice(0, openingParenthesisIndex) +
        calculate(value.slice(openingParenthesisIndex + 1));
    }
  } else if (closingParenthesisIndex >= 0) {
    value =
    calculate(value.slice(0, closingParenthesisIndex)) +
    value.slice(closingParenthesisIndex + 1);
  }
  const valueArray: Array<string | number> = getValueArray(value);
  const result = simpleMathOperation(valueArray);
  return result;
};

// const calculate = (value) => {
//   const openingParenthesisIndex = value.indexOf('(');
//   const closingParenthesisIndex = value.indexOf(')');
//   if (openingParenthesisIndex >= 0) {
//     if (closingParenthesisIndex < openingParenthesisIndex) {
//       console.log('call with:', value.slice(0, closingParenthesisIndex - 1));
//       console.log('append: value.slice(closingParenthesisIndex + 1)');
//     } else {
//       console.log('prepend', value.slice(0, openingParenthesisIndex));
//       console.log('call with:', value.slice(openingParenthesisIndex + 1));
//     }
//   } else if (closingParenthesisIndex >= 0) {
//     console.log('call with:', value.slice(0, closingParenthesisIndex - 1));
//     console.log('append:', value.slice(closingParenthesisIndex + 1));
//   }
// };