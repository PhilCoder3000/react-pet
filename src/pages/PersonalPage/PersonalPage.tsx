import { useSelector } from 'app/providers/store';
import { selectUserAuth } from 'entities/user';
import { Navigate } from 'react-router-dom';
import { Profile } from './ui/Profile/Profile';

export default function PersonalPage() {
  const { isAuth } = useSelector(selectUserAuth);
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <Profile />
    </div>
  );
}
