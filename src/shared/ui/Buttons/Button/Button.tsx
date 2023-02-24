import { ButtonHTMLAttributes } from 'react';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './Button.module.scss';

type Color = 'primary' | 'secondary';
type Variant = 'contained' | 'outlined';
type Size = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
}

export function Button({
  children,
  color = 'primary',
  variant = 'outlined',
  size = 'medium',
  className,
  isLoading,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      {...otherProps}
      className={classnames(
        classes.button,
        classes[color],
        classes[variant],
        classes[size],
        className,
      )}
    >
      {children}
      <span
        className={classnames(classes.spinnerContainer, {
          [classes.showSpinner]: isLoading,
        })}
      >
        <span className={classes.spinner} />
      </span>
    </button>
  );
}
