import { memo, PropsWithChildren } from 'react';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './Title.module.scss';

interface TitleProps extends PropsWithChildren {
  className?: string;
}

export const Title = memo(({ children, className }: TitleProps) => {
  return <h1 className={classnames(classes.title, className)}>{children}</h1>;
});
