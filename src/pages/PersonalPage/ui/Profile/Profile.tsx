import { useDispatch, useSelector } from 'app/providers/store';
import { Profile, selectUserAuth } from 'entities/user';
import { updateUserProfile } from 'entities/user/api/updateUserProfile';
import { signOut } from 'entities/user/utils/signOut';
import { Button } from 'shared/ui/Buttons/Button';
import { TextInput } from 'shared/ui/Inputs/TextInput';
import { useForm } from 'shared/utils/useForm/useForm';
import { AvatarUploader } from 'widgets/AvatarUploader/AvatarUploader';
import classes from './Profile.module.scss';

export function Profile() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(selectUserAuth);
  const { value, changeHandler, submitHandler } = useForm<Profile>(
    {
      displayName: userInfo?.displayName || '',
      photoURL: userInfo?.photoURL || '',
    },
    (profile) => dispatch(updateUserProfile(profile)),
  );

  return (
    <div className={classes.container}>
      <AvatarUploader />
      <TextInput
        placeholder="name"
        name="displayName"
        value={value.displayName}
        onChange={changeHandler}
        variant="outlined"
      />
      <div className={classes.controls}>
        <Button className={classes.saveBtn} onClick={submitHandler}>
          Save
        </Button>
        <Button onClick={signOut}>Sign out</Button>
      </div>
    </div>
  );
}
