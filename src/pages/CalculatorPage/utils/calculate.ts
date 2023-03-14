import { getValueArray } from './getValueArray';
import { simpleMathOperation } from './simpleMathOperation';

const openingParenthesis = '(';
const closingParenthesis = ')';

export const calculate = (value: string) => {
  let openingParenthesisIndex = value.indexOf(openingParenthesis);
  
  while (openingParenthesisIndex >= 0) {
    const closingParenthesisIndex = value.indexOf(closingParenthesis);
    const closestOpenParenthesisIndex = value.slice(0, closingParenthesisIndex).lastIndexOf(openingParenthesis)
    const valueInsideParenthesis = value.slice(closestOpenParenthesisIndex + 1, closingParenthesisIndex)
    value = value.slice(0, closestOpenParenthesisIndex) + calculate(valueInsideParenthesis) + value.slice(closingParenthesisIndex + 1)
    openingParenthesisIndex = value.indexOf(openingParenthesis);
  }

  const valueArray: Array<string | number> = getValueArray(value);
  if (valueArray.length === 1) {
    return Number(value);
  }

  const result = simpleMathOperation(valueArray);
  return result;
};
