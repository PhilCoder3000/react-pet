import { memo } from 'react';
import classes from './RoomBtn.module.scss';

interface RoomBtnProps {
  children: string;
  setRoomId: (room: string) => void;
}

export const RoomBtn = memo(({ children, setRoomId }: RoomBtnProps) => (
  <div className={classes.container} onClick={() => setRoomId(children)}>
    {children}
  </div>
));
