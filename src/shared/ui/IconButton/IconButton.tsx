import { ButtonHTMLAttributes, MouseEvent } from 'react';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './IconButton.module.scss';

type Color = 'primary' | 'secondary';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function IconButton({
  children,
  color = 'primary',
  className,
  ...otherProps
}: IconButtonProps) {
  return (
    <button
      {...otherProps}
      className={classnames(classes.button, classes[color], className)}
      data-testid="icon-button"
    >
      {children}
    </button>
  );
}
