import React, { useCallback, useState } from 'react';
import { getDefaultErrors } from './helpers/getDefaultErrors';
import { validate } from './helpers/validate';
import type { InitialValue, Validation } from './types';

export function useForm<T extends InitialValue>(
  initialValue: T,
  onSubmit: (value: T) => void,
  validation?: Validation<T>,
) {
  const [value, setValue] = useState<T>(initialValue);
  const [errors, setErrors] = useState(() => getDefaultErrors(initialValue));

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value: inputValue } = e.target;
      setValue((prev) => ({
        ...prev,
        [name]: inputValue,
      }));
    },
    [],
  );

  const submitHandler = useCallback(() => {
    if (validation) {
      const { isValid, invalidName, errors } = validate(value, validation);

      if (isValid) {
        onSubmit(value);
      } else {
        setErrors(errors);
        document
          .getElementsByName(invalidName)[0]
          .scrollTo({ behavior: 'smooth' });
      }
    } else {
      onSubmit(value);
    }
  }, [onSubmit, validation, value]);

  return {
    value,
    errors,
    changeHandler,
    submitHandler,
  };
}
