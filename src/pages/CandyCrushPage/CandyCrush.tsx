import classes from "./CandyCrush.module.scss";
import { GameField } from './GameField';

export default function CandyCrush() {
  return (
    <div className={classes.container}>
      <GameField />
    </div>
  );
}
