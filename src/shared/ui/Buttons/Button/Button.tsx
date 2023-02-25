import { ButtonHTMLAttributes, memo } from 'react';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './Button.module.scss';

type Color = 'primary' | 'secondary';
type Variant = 'contained' | 'outlined';
type Size = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
}

export const Button = memo(
  ({
    children,
    color = 'primary',
    variant = 'outlined',
    size = 'medium',
    className,
    isLoading,
    ...otherProps
  }: ButtonProps) => (
    <button
      className={classnames(
        classes.button,
        classes[color],
        classes[variant],
        classes[size],
        className,
      )}
      {...otherProps}
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
  ),
);
