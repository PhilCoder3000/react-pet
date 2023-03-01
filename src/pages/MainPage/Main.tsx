import { useDispatch } from 'app/providers/store';
import { openSnackBar } from 'entities/snackBar';
import { Button } from 'shared/ui/Buttons/Button';

export default function Main() {
  const dispatch = useDispatch();
  const showSnackBar = () =>
    dispatch(
      openSnackBar({
        color: 'error',
        message: 'Error sadf sadf sadf asd f',
      }),
    );
  return (
    <div>
      Main
      <Button onClick={showSnackBar}>Show snack bar</Button>
    </div>
  );
}
