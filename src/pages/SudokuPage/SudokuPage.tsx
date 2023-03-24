import { useState } from 'react';
import { Button } from 'shared/ui/Buttons/Button';
import classes from './SudokuPage.module.scss';
import SudokuField from './utils/SudokuField';

export default function SudokuPage() {
  const [field] = useState<number[][]>([[]]);
  const generate = () => {
    const sudoku = new SudokuField(9);
    try {
      console.log(sudoku.fillBlank());
      
      // setField(sudoku);
    } catch (error) {
      console.log('🚀 ~ file: SudokuPage.tsx:14 ~ generate ~ error:', error);
    }
  };

  return (
    <>
      <Button onClick={generate}>generate</Button>
      <div className={classes.grid}>
        {field.map((square, index) => (
          <div key={index} className={classes.grid}>
            {square.map((item, index) => (
              <div key={index} className={classes.item}>{item}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
