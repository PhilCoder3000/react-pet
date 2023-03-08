import { memo, TextareaHTMLAttributes, useId } from 'react';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './TextArea.module.scss';

type Variant = 'outlined' | 'contained';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  variant?: Variant;
  isError?: boolean;
  errorMessage?: string;
  containerClassName?: string;
}

export const TextArea = memo(
  ({
    value,
    children,
    rows = 5,
    className,
    containerClassName,
    variant = 'contained',
    isError,
    errorMessage,
    placeholder,
    ...otherProps
  }: TextAreaProps) => {
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
        <textarea
          id={id}
          className={classnames(classes.textarea, className)}
          placeholder=" "
          rows={rows}
          {...otherProps}
        >
          {value || children}
        </textarea>
        <label htmlFor={id} className={classes.label}>
          {errorMessage || placeholder}
        </label>
      </div>
    );
  },
);
