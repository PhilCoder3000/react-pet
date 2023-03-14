import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Buttons/Button';
import { NumberInput } from 'shared/ui/Inputs/NumberInput';
import { TextArea } from 'shared/ui/Inputs/TextArea';
import { Text } from 'shared/ui/Text/Text';
import { calculate } from '../utils/calculate';
import classes from './Field.module.scss';

export function Field() {
  const [expression, setExpression] = useState('');

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setExpression(e.target.value),
    [],
  );

  const [result, setResult] = useState<number | string>('');

  const calculateHandler = () => setResult(calculate(expression));

  const [fractionDigits, setFractionDigits] = useState('2');

  return (
    <div>
      <TextArea
        variant="outlined"
        value={expression}
        onChange={changeHandler}
        containerClassName={classes.textarea}
      />
      <NumberInput
        placeholder="digits to appear after the decimal point"
        value={fractionDigits}
        onChange={(e) => setFractionDigits(e.target.value)}
      />
      <Button onClick={calculateHandler}>Calculate</Button>
      <Text>result = {Number(result).toFixed(Number(fractionDigits))}</Text>
    </div>
  );
}
