import { useSelector } from 'app/providers/store';
import { AppRoutes } from 'app/types/pagesPaths';
import { selectUserAuth } from 'entities/user';
import { useNavigate } from 'react-router-dom';
import PersonIcon from 'shared/assets/svg/profile/person.svg';
import classes from './SmallAvatar.module.scss';

export function SmallAvatar() {
  const { userInfo } = useSelector(selectUserAuth);
  const navigate = useNavigate();
  return (
    <div
      className={classes.container}
      onClick={() => navigate(AppRoutes.PERSONAL_PAGE)}
    >
      {userInfo?.photoURL ? (
        <img alt="avatar" src={userInfo.photoURL} />
      ) : (
        <PersonIcon />
      )}
    </div>
  );
}
