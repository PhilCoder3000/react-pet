import { forwardRef, InputHTMLAttributes, memo, useId } from 'react';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './TextInput.module.scss';

type Variant = 'contained' | 'outlined';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children'> {
  placeholder?: string;
  containerClassName?: string;
  variant?: Variant;
  beforeElement?: React.ReactNode;
  afterElement?: React.ReactNode;
  isError?: boolean;
  errorMessage?: string
}

const SimpleTextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      placeholder,
      containerClassName,
      className,
      variant = 'contained',
      beforeElement,
      afterElement,
      isError,
      errorMessage,
      ...inputProps
    },
    ref,
  ) => {
    const id = useId();
    return (
      <div
        className={classnames(
          classes.container,
          containerClassName,
          classes[variant],
          isError && classes.error,
        )}
      >
        {beforeElement}
        <input
          ref={ref}
          id={id}
          placeholder=" "
          type="text"
          className={classnames(classes.input, className)}
          {...inputProps}
        />
        <label htmlFor={id} className={classes.label}>
          {errorMessage || placeholder}
        </label>
        {afterElement}
      </div>
    );
  },
);

export const TextInput = memo(SimpleTextInput) 