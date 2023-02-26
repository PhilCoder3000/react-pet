import { Candy } from '../types';

export const dragReplaceCandies = (
  candies: Candy[],
  draggedCellId: string,
  replacedCellId: string,
) => {
  const draggedCellIndex = candies.findIndex(({ id }) => id === draggedCellId);
  const replacedCellIndex = candies.findIndex(
    ({ id }) => id === replacedCellId,
  );

  const { color: draggedColor } = candies[draggedCellIndex];
  const { color: replacedColor } = candies[replacedCellIndex];

  return candies.map((candy) => {
    if (candy.id === draggedCellId) {
      return {
        ...candy,
        color: replacedColor,
      };
    }
    if (candy.id === replacedCellId) {
      return {
        ...candy,
        color: draggedColor,
      };
    }
    return candy;
  });
};