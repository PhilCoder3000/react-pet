import classes from './PersonalPage.module.scss';
import { Profile } from './ui/Profile/Profile';

export default function PersonalPage() {
  return (
    <div className={classes.container}>
      <Profile />
    </div>
  );
}
