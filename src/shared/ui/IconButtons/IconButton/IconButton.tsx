import { ButtonHTMLAttributes, memo, MouseEvent } from 'react';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './IconButton.module.scss';

type Color = 'primary' | 'secondary';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton = memo(
  ({
    children,
    color = 'primary',
    className,
    ...otherProps
  }: IconButtonProps) => (
    <button
      data-testid="icon-button"
      {...otherProps}
      className={classnames(classes.button, classes[color], className)}
    >
      {children}
    </button>
  ),
);
