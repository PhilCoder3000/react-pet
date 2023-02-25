import { memo } from 'react';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './Link.module.scss';

type Color = 'primary' | 'secondary';

interface LinkProps extends RouterLinkProps {
  color?: Color;
  children: string;
}

export const Link = memo(
  ({
    children,
    to,
    className,
    color = 'primary',
    ...otherProps
  }: LinkProps) => (
    <RouterLink
      to={to}
      className={classnames(classes.link, className, classes[color])}
      {...otherProps}
    >
      {children}
    </RouterLink>
  ),
);
