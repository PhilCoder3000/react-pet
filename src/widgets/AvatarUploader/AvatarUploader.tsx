import { firebaseAuth, firebaseStorage } from 'app/firebase';
import { useDispatch } from 'app/providers/store';
import { setPhotoUrl } from 'entities/user';
import { updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useCallback, useState } from 'react';
import PersonIcon from 'shared/assets/svg/profile/person.svg';
import { ImageCropper } from 'shared/ui/Avatar/ImageCropper';
import { Button } from 'shared/ui/Buttons/Button';
import { Modal } from 'shared/ui/Modals/Modal';
import { useFileInput } from 'shared/utils/DOMhooks/useFileInput';
import classes from './AvatarUploader.module.scss';

export function AvatarUploader() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const { Input, openFileDialog } = useFileInput();
  const [isOpen, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState('');
  const [croppedCanvas, setCroppedCanvas] =
    useState<HTMLCanvasElement | null>(null);

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
        const newFile = e.target.files[0];
        setFile(newFile);
        const url = URL.createObjectURL(newFile);
        setFileUrl(url);
      }
    },
    [],
  );

  const saveHandler = async () => {
    if (file && croppedCanvas) {
      setLoading(true);
      try {
        const name =
          Array.from({ length: 20 }, () =>
            Math.floor(Math.random() * 16).toString(36),
          ).join('') +
          '.' +
          file.type.split('/')[1];
        croppedCanvas.toBlob(async (blob) => {
          if (blob) {
            const uploadedFile = new File([blob], name, { type: file.type });
            const filePath = `/avatars/${name}`;
            const fileRef = ref(firebaseStorage, filePath);
            const snapshot = await uploadBytes(fileRef, uploadedFile);
            const photoURL = await getDownloadURL(snapshot.ref);
            if (firebaseAuth.currentUser && photoURL) {
              updateProfile(firebaseAuth.currentUser, {
                photoURL,
              });
              dispatch(setPhotoUrl(photoURL));
            }
          }
        }, file.type);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
      setOpen(false);
      setFile(null);
      setFileUrl('');
    }
  };

  return (
    <>
      <Button className={classes.uploadBtn} onClick={() => setOpen(true)}>
        Upload avatar
      </Button>
      <Modal
        title="Change avatar"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      >
        <div className={classes.container}>
          <div
            className={classes.avatarCircle}
            onClick={fileUrl ? undefined : openFileDialog}
          >
            {fileUrl ? (
              <ImageCropper src={fileUrl} setCroppedCanvas={setCroppedCanvas} />
            ) : (
              <>
                <PersonIcon className={classes.icon} />
                <p className={classes.description}>Choose photo</p>
              </>
            )}
            <Input accept="image/*" onChange={changeHandler} />
          </div>
        </div>
        <div>
          <Button
            disabled={!fileUrl}
            isLoading={isLoading}
            onClick={saveHandler}
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}
