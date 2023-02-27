import { emailCheck } from '../checkers/emailCheck';
import { requiredCheck } from '../checkers/requiredCheck';
import { InitialValue, Validation, Errors } from '../types';

export const validate = (
  value: InitialValue,
  validation: Validation<InitialValue>,
) => {
  let invalidName = '';
  const errors = {} as Errors;
  Object.keys(validation).forEach((key) => {
    const validationRules = validation[key];
    const checkedValue = value[key];

    if (validationRules) {
      if (validationRules.isRequired) {
        const requiredErrors = requiredCheck(checkedValue, validationRules);
        if (requiredErrors) {
          invalidName = invalidName || key;
          errors[key] = requiredErrors;
        }
      }

      if (validationRules.type === 'email') {
        const emailErrors = emailCheck(checkedValue);
        if (emailErrors) {
          invalidName = invalidName || key;
          errors[key] = emailErrors;
        }
      }
    }
  });
  return { isValid: !Object.keys(errors).length, invalidName, errors };
};
