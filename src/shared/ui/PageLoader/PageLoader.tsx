import { memo } from 'react';
import classes from './PageLoader.module.scss';

export const PageLoader = memo(() => (
  <div className={classes.container}>
    <span className={classes.loader}></span>
  </div>
));
