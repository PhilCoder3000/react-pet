import { forwardRef, HTMLAttributes, memo } from 'react';
import { classnames } from 'shared/utils/classnames/classnames';
import CandySvg from '../assets/candy.svg';
import { CandyColor } from '../types';
import classes from './GameCell.module.scss';

interface GameCellProps extends HTMLAttributes<HTMLDivElement> {
  color: CandyColor;
}

export const GameCell = memo(
  // eslint-disable-next-line react/prop-types
  forwardRef<SVGSVGElement, GameCellProps>(({ color, ...otherProps }, ref) => {
    return (
      <div className={classnames(classes.cell, classes[color])}>
        <div draggable={true} {...otherProps}>
          <CandySvg ref={ref} className={classes.candy} />
        </div>
      </div>
    );
  }),
);
