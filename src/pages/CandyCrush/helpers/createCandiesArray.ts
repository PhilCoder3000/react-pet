import { getRandomCandy } from './getRandomCandy';

export const createCandiesArray = (length: number) => {
  return Array.from({ length }, (_, index) => {
    return {
      id: String(index),
      color: getRandomCandy(),
    };
  });
};
