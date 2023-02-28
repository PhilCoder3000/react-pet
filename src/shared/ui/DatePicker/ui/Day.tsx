import { memo, PropsWithChildren } from 'react';
import classes from './Day.module.scss';

export const Day = memo(({ children }: PropsWithChildren) => (
  <div className={classes.container}>
    <div>
      <p>{children}</p>
    </div>
  </div>
))