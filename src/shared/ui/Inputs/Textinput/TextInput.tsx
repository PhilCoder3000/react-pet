import { InputHTMLAttributes, useId } from 'react';
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

export function TextInput({
  placeholder,
  containerClassName,
  className,
  variant = 'contained',
  beforeElement,
  afterElement,
  ...inputProps
}: TextInputProps) {
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
        id={id}
        placeholder=" "
        type="text"
        {...inputProps}
        className={classnames(classes.input, className)}
      />
      <label htmlFor={id} className={classes.label}>
        {placeholder}
      </label>
      {afterElement}
    </div>
  );
}
