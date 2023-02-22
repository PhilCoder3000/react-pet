import { useDispatch, useSelector } from 'app/providers/store';
import { Button } from 'shared/ui/Buttons/Button';
import { decrement, increment } from './slice';

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h5>value {count}</h5>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </div>
  );
}
