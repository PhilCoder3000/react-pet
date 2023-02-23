import type { AllowedValue, ValidationParams } from '../types';

export const requiredCheck = (
  checkedValue: AllowedValue,
  validationRules: ValidationParams,
) => {
  if (typeof checkedValue === 'string') {
    if (checkedValue.trim() === '') {
      if (typeof validationRules.isRequired === 'boolean') {
        return true;
      } else {
        return validationRules.isRequired?.errorMessage;
      }
    }
  }
  return false;
};
