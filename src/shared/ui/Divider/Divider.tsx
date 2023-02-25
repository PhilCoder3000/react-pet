import { memo } from 'react';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './Divider.module.scss';

interface DividerProps {
  className?: string;
}

export const Divider = memo(({ className }: DividerProps) => (
  <span className={classnames(classes.divider, className)} />
));
