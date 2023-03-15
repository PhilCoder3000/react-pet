import classes from './ChatRooms.module.scss';
import { RoomField } from './RoomField/RoomField';
import { RoomsList } from './RoomsList/RoomsList';

export default function ChatRooms() {
  return (
    <div className={classes.container}>
      <RoomsList />
      <RoomField />
    </div>
  );
}
