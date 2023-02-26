import { HTMLAttributes, memo } from 'react';
import { classnames } from 'shared/utils/classnames/classnames';
import { CandyColor } from '../types';
import classes from './GameCell.module.scss';

interface GameCellProps extends HTMLAttributes<HTMLDivElement> {
  color: CandyColor;
}

export const GameCell = memo(
  ({ color, children, ...otherProps }: GameCellProps) => {
    return (
      <div
        className={classnames(classes.cell, classes[color])}
        draggable={true}
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);
