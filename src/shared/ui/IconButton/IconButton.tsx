import { ButtonHTMLAttributes, MouseEvent, PropsWithChildren } from 'react';
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
  ...otherProps
}: IconButtonProps) {
  return (
    <button
      className={classnames(classes.button, classes[color])}
      {...otherProps}
    >
      {children}
    </button>
  );
}
