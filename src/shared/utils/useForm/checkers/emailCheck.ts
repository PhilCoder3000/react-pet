import { AllowedValue } from '../types';

export const emailCheck = (checkedValue: AllowedValue) => {
  if (typeof checkedValue === 'string') {
    if (checkedValue.toLowerCase().match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      return false;
    }
  }
  return 'incorrect email format';
};