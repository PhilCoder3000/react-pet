import { useDispatch, useSelector } from 'app/providers/store';
import { Button } from 'shared/ui/Buttons/Button';
import { decrement, increment, selectCounter } from './slice';

export function Counter() {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <h5>value {count.value}</h5>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </div>
  );
}
