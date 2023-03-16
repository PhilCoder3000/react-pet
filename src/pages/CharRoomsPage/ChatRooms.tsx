import { getRooms } from 'entities/chat/api/getRooms';
import { useState } from 'react';
import classes from './ChatRooms.module.scss';
import { RoomField } from './RoomField/RoomField';
import { RoomsList } from './RoomsList/RoomsList';

let isPending = true;
let rooms: string[] = [];
const promise = getRooms()
  .then((r) => (rooms = r))
  .finally(() => {
    isPending = false;
  });

export default function ChatRooms() {
  if (isPending) {
    throw promise;
  }

  const [roomId, setRoomId] = useState('');
  
  return (
    <div className={classes.container}>
      <RoomsList rooms={rooms} setRoomId={setRoomId} />
      {roomId && <RoomField roomId={roomId} />}
    </div>
  );
}
