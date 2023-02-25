import { forwardRef, InputHTMLAttributes, useId } from 'react';
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
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      placeholder,
      containerClassName,
      className,
      variant = 'contained',
      beforeElement,
      afterElement,
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
          {placeholder}
        </label>
        {afterElement}
      </div>
    );
  },
);
