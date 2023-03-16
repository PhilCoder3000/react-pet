import { getRooms } from 'entities/chat/api/getRooms';
import { RoomBtn } from '../RoomBtn/RoomBtn';
import classes from './RoomsList.module.scss';

interface RoomsListProps {
  rooms: string[];
  setRoomId: (roomId: string) => void;
}

export function RoomsList({ rooms, setRoomId }: RoomsListProps) {
  getRooms();
  return (
    <div className={classes.container}>
      {rooms.map((r) => (
        <RoomBtn key={r} setRoomId={setRoomId}>{r}</RoomBtn>
      ))}
    </div>
  );
}
