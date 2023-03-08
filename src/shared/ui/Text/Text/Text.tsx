import { memo, PropsWithChildren } from 'react';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './Text.module.scss';

interface TextProps extends PropsWithChildren {
  className?: string;
}

export const Text = memo(({ className, children }: TextProps) => {
  return <p className={classnames(classes.paragraph, className)}>{children}</p>;
});
