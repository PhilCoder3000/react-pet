import { useDispatch, useSelector } from 'app/providers/store';
import { Profile, selectUserAuth } from 'entities/user';
import { updateUserProfile } from 'entities/user/api/updateUserProfile';
import { AvatarUploader } from 'shared/ui/Avatar/AvatarUploader/AvatarUploader';
import { Button } from 'shared/ui/Buttons/Button';
import { TextInput } from 'shared/ui/Inputs/TextInput';
import { useForm } from 'shared/utils/useForm/useForm';

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
    <div>
      <AvatarUploader />
      <TextInput
        name="displayName"
        value={value.displayName}
        onChange={changeHandler}
      />
      <Button onClick={submitHandler}>Update profile</Button>
    </div>
  );
}
