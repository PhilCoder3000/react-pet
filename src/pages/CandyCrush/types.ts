export type CandyColor =
  | 'red'
  | 'yellow'
  | 'orange'
  | 'purple'
  | 'green'
  | 'blue'
  | 'white';

export type Candy = {
  id: string;
  color: CandyColor;
};

export type CheckForThreeReturnType = {
  index: number;
  direction: 'horizontal' | 'vertical';
};
