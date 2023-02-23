import type { Errors, InitialValue } from '../types';

export const getDefaultErrors = (value: InitialValue) => {
  const errors = {} as Errors;

  Object.keys(value).forEach((key) => (errors[key] = false));

  return errors;
};