import { Candy, CheckForThreeReturnType } from '../types';
import { candiesInRow } from './vars';

export const checkForThree = (candies: Candy[]): CheckForThreeReturnType | null => {
  const verticalIndex = checkVerticalForThree(candies);

  if (verticalIndex >= 0) {
    return {
      index: verticalIndex,
      direction: 'vertical'
    }
  }

  const horizontalIndex = checkHorizontalForThree(candies);
  if (horizontalIndex >= 0) {

    return {
      index: horizontalIndex,
      direction: 'horizontal'
    }

  }
}

const checkHorizontalForThree = (candies: Candy[]) => {
  for (let i = 0; i < candies.length - 2; i++) {
    const rowOfThree = [candies[i], candies[i + 1], candies[i + 2]];
    const checkColor = candies[i].color;
    if (checkColor === 'white') {
      continue;
    }
    if (rowOfThree.every(({ color }) => color === checkColor)) {
      return i;
    }
  }
  return -1;
};

const checkVerticalForThree = (candies: Candy[]) => {
  for (let i = 0; i < candies.length - candiesInRow * 2; i++) {
    const rowOfThree = [
      candies[i],
      candies[i + candiesInRow],
      candies[i + candiesInRow * 2],
    ];
    const checkColor = candies[i].color;
    if (checkColor === 'white') {
      continue;
    }
    if (rowOfThree.every(({ color }) => color === checkColor)) {
      return i;
    }
  }
  return -1;
};