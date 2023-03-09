import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Buttons/Button';
import { TextArea } from 'shared/ui/Inputs/TextArea';
import { Text } from 'shared/ui/Text/Text';
import { calculate } from '../utils/calculate';
import classes from "./Field.module.scss";

export function Field() {
  const [value, setValue] = useState('');

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value),
    [],
  );

  const [result, setResult] = useState<number | string>('');

  const calculateHandler = () => setResult(calculate(value));

  return (
    <div>
      <TextArea variant="outlined" value={value} onChange={changeHandler} containerClassName={classes.textarea} />
      <Button onClick={calculateHandler}>Calculate</Button>
      <Text>result = {result}</Text>
    </div>
  );
}
