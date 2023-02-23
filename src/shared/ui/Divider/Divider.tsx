import { classnames } from 'shared/utils/classnames/classnames';
import classes from './Divider.module.scss';

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return <span className={classnames(classes.divider, className)} />;
}
