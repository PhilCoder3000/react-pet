import { useCallback, useEffect, useRef, useState } from 'react';
import { GameCell } from '../GameCell/GameCell';
import { checkForThree } from '../helpers/checkForThree';
import { createCandiesArray } from '../helpers/createCandiesArray';
import { dragReplaceCandies } from '../helpers/dragReplaceCandies';
import { moveColorDown } from '../helpers/moveColorDown';
import { threeReplaceCandies } from '../helpers/threeReplaceCandies';
import { candiesInRow } from '../helpers/vars';
import classes from './GameField.module.scss';

const isValidMove = (draggedCellId: string, replacedCellId: string) => {
  const avg = Number(draggedCellId) - Number(replacedCellId);
  if (avg === 1 || avg === -1) {
    return true;
  }
  if (avg === candiesInRow || avg === -candiesInRow) {
    return true;
  }
  return false;
};

export function GameField() {
  const [candies, setCandies] = useState(() =>
    createCandiesArray(candiesInRow * candiesInRow),
  );
  const [draggedCellId, setDraggedCell] = useState('');

  const onDragStart = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    setDraggedCell(e.currentTarget.id);
  }, []);
  const onDragEnd = useCallback(() => {
    //
  }, []);
  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);
  const onDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);
  const onDragLeave = useCallback(() => {
    //
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      const replacedCellId = e.currentTarget.id;
      if (isValidMove(draggedCellId, replacedCellId)) {
        setCandies((prev) =>
          dragReplaceCandies(prev, draggedCellId, replacedCellId),
        );
        setDraggedCell('');
      }
    },
    [draggedCellId],
  );

  useEffect(() => {
    const checkResult = checkForThree(candies);
    if (checkResult) {
      const newCandies = threeReplaceCandies(checkResult, candies)
      if (newCandies) {
        setCandies(newCandies);
      }
    }
  }, [candies]);

  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let timeout = timeoutRef.current;
    if (candies.some(({ color }) => color === 'white')) {
      console.log('moveColorDown set candies', moveColorDown(candies));
      timeout = setTimeout(
        () => setCandies(moveColorDown(candies)),
        100,
      );
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [candies]);

  return (
    <div className={classes.field}>
      {candies.map(({ color, id }) => (
        <GameCell
          id={id}
          key={id}
          color={color}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
}
