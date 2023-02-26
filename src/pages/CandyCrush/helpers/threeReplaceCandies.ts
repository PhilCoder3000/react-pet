import { Candy, CheckForThreeReturnType } from '../types';
import { candiesInRow } from './vars';

export const threeReplaceCandies = (
  { index, direction }: CheckForThreeReturnType,
  candies: Candy[],
) => {
  if (direction === 'vertical') {
    let copyCandies = structuredClone(candies);
    const indexes = [index, index + candiesInRow, index + candiesInRow * 2];
    copyCandies = copyCandies.map((candy, index) =>
      indexes.includes(index) ? { ...candy, color: 'white' } : candy,
    );
    return copyCandies;
  }
  if (direction === 'horizontal') {
    const copyCandies = structuredClone(candies);
    const changedElements: Candy[] = copyCandies
      .slice(index, index + 3)
      .map((candy) => ({ ...candy, color: 'white' }));
    copyCandies.splice(index, 3, ...changedElements);
    return copyCandies;
  }
};
