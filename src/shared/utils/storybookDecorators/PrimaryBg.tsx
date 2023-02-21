import type { DecoratorFn } from '@storybook/react';
import classes from "./PrimaryBg.module.scss";

export const primaryBgDecorator: DecoratorFn = (Story) => (
  <div className={classes.container}>
    <Story />
  </div>
);
