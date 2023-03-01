import { useCallback, useState } from 'react';
import PersonIcon from 'shared/assets/svg/profile/person.svg';
import { Button } from 'shared/ui/Buttons/Button';
import { Modal } from 'shared/ui/Modals/Modal';
import { useFileInput } from 'shared/utils/DOMhooks/useFileInput';
import { ImageCropper } from '../ImageCropper';
import classes from './AvatarUploader.module.scss';

export function AvatarUploader() {
  const { Input, openFileDialog } = useFileInput();
  const [isOpen, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState('');

  // TODO refactoring
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
        const newFile = e.target.files[0];
        setFile(newFile);
        const url = URL.createObjectURL(newFile);
        setFileUrl(url);
        const reader = new FileReader();
        reader.readAsDataURL(newFile);
        reader.onloadend = function (e: ProgressEvent<FileReader>) {
          if (e.target?.result) {
            const image = new Image();
            image.src = e.target.result as string;
            image.onload = function () {
              const canvas = document.getElementById('canvas') as HTMLCanvasElement;
              if (canvas) {
                canvas.width = image.width;
                canvas.height = image.height;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                  ctx.drawImage(image, 0, 0);
                }
              }
            };
          }
        };
      }
    },
    [],
  );

  const saveHandler = () => {
    console.log(file);
  };

  const cropping = useCallback(() => {
    const image = new Image();
    image.src = fileUrl;

    const canvas = document.getElementById('canvas');
    if (canvas) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 10, 10, 100, 100);
    }
  }, [fileUrl]);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Upload avatar</Button>
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
              <ImageCropper src={fileUrl} />
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
          <canvas id="canvas"></canvas>
        </div>
        <div>
          <Button onClick={cropping}>crop</Button>
          <Button onClick={saveHandler}>Save</Button>
        </div>
      </Modal>
    </>
  );
}
