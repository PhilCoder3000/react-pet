import { CandyColor } from '../types';

const candyColors: CandyColor[] = [
  'red',
  'yellow',
  'orange',
  'purple',
  'green',
  'blue',
];

export const getRandomCandy = () => {
  const randomIndex = Math.floor(Math.random() * candyColors.length);
  return candyColors[randomIndex];
};
