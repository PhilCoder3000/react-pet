type ValidationRuleObject = { errorMessage: string };

type ValidationRule = boolean | ValidationRuleObject;

type ValidationType = 'email';

export type ValidationParams = {
  isRequired?: ValidationRule;
  type?: ValidationType;
};

export type Validation<T> = {
  [key in keyof T]?: ValidationParams;
};

export type AllowedValue = string | number | boolean;

export interface InitialValue {
  [key: string]: AllowedValue;
}

export type Errors = Record<keyof InitialValue, boolean | string>;