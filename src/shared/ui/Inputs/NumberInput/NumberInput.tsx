import { memo, useCallback } from 'react';
import { TextInput, TextInputProps } from '../TextInput';

const validValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export type NumberInputProps = TextInputProps;

export const NumberInput = memo(
  ({ onChange, onKeyDown, ...otherProps }: NumberInputProps) => {
    const changeHandler = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (RegExp(/^\d+$/g).test(e.target.value) && onChange) {
          onChange(e);
        }
      },
      [onChange],
    );

    const keyDownHandler = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!validValues.includes(e.key)) {
          e.preventDefault();
        }
        if (onKeyDown) {
          onKeyDown(e);
        }
      },
      [onKeyDown],
    );

    return (
      <TextInput
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        type="number"
        {...otherProps}
      />
    );
  },
);
