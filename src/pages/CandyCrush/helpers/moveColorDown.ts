import { Candy } from '../types';
import { getRandomCandy } from './getRandomCandy';
import { candiesInRow } from './vars';

export const moveColorDown = (candies: Candy[]): Candy[] => {
  const copy = structuredClone(candies);
  candies.forEach((candy, index) => {
    if (candy.color === 'white') {
      if (index > candiesInRow) {
        const upCandyIndex = index - candiesInRow;
        copy[index].color = copy[upCandyIndex].color;
        copy[upCandyIndex].color = 'white';
      } else {
        copy[index].color = getRandomCandy();
      }
    }
  });
  if (copy.some(({ color }) => color === 'white')) {
    return moveColorDown(copy)
  }
  return copy;
};
