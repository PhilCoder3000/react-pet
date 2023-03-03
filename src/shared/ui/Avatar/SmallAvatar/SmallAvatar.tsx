import { useSelector } from 'app/providers/store';
import { AppRoutes } from 'app/types/pagesPaths';
import { selectUserAuth } from 'entities/user';
import { useNavigate } from 'react-router-dom';
import classes from './SmallAvatar.module.scss';

export function SmallAvatar() {
  const { userInfo } = useSelector(selectUserAuth);
  const navigate = useNavigate()
  if (userInfo?.photoURL) {
    return (
      <div className={classes.container} onClick={() => navigate(AppRoutes.PERSONAL_PAGE)}>
        <img alt="avatar" src={userInfo.photoURL || ''} />
      </div>
    );
  }
  return null;
}
