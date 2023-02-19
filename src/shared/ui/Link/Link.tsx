import type { LinkProps as RouterLinkProps } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './Link.module.scss';

type Color = 'primary' | 'secondary';

interface LinkProps extends RouterLinkProps {
  color?: Color;
}

export function Link({
  children,
  to,
  className,
  color = 'primary',
  ...otherProps
}: LinkProps) {
  return (
    <RouterLink
      to={to}
      {...otherProps}
      className={classnames(classes.link, className, classes[color])}
    >
      {children}
    </RouterLink>
  );
}
