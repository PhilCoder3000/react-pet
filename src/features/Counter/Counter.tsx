import { useDispatch, useSelector } from 'app/providers/store';
import { Button } from 'shared/ui/Buttons/Button';
import { dec, inc } from './counterSlice';

export function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => dispatch(inc())}>+</Button>
      <Button onClick={() => dispatch(dec())}>-</Button>
    </div>
  );
}
