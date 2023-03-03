// import { firebaseStorage } from 'app/firebase';
// import { ref, uploadBytes } from 'firebase/storage';
import { useCallback, useEffect, useRef, useState } from 'react';
import PersonIcon from 'shared/assets/svg/profile/person.svg';
import { Button } from 'shared/ui/Buttons/Button';
import { Modal } from 'shared/ui/Modals/Modal';
import { useFileInput } from 'shared/utils/DOMhooks/useFileInput';
import classes from './AvatarUploader.module.scss';

let offsetX = 0;
let offsetY = 0;
let startX = 0;
let startY = 0;
let imageTop = 0;
let imageLeft = 0;

const getDrawnCanvasUrl = (
  image: HTMLImageElement,
  left: number,
  top: number,
) => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  // const canvas = document.createElement('canvas');
  if (canvas) {
    const canvasWidth = 100;
    canvas.width = canvasWidth;
    canvas.height = canvasWidth;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const defaultXScale = image.width / canvas.width;
      const defaultYScale = image.height / canvas.height;
      // console.log('🚀 ~ file: AvatarUploader.tsx:33 ~ defaultYScale:', defaultYScale);
      const delimiter = 250 / canvasWidth;
      const sx = -left / delimiter,
        sy = -top / delimiter,
        sw = Number(image.width),
        sh = Number(image.height),
        dx = (-sx / defaultXScale) * delimiter,
        dy = (-sy / defaultYScale) * delimiter,
        dw = sw / delimiter,
        dh = sh / delimiter;

      console.log('🚀 ~ file: AvatarUploader.tsx:31 ~ left:', left);
      console.log('🚀 ~ file: AvatarUploader.tsx:31 ~ defaultXScale:', defaultXScale);
      console.log('🚀 ~ file: AvatarUploader.tsx:41 ~ dx:', dx);
      // console.log('🚀 ~ file: AvatarUploader.tsx:42 ~ dy:', dy);
      ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
  return canvas;
};

export function AvatarUploader() {
  const { Input, openFileDialog } = useFileInput();
  const [isOpen, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState('');

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
    if (file && imageRef.current) {
      //   const name =
      //     Array.from({ length: 20 }, () =>
      //       Math.floor(Math.random() * 16).toString(36),
      //     ).join('') +
      //     '.' +
      //     file.type.split('/')[1];
      //   const canvas = getDrawnCanvasUrl(imageRef.current, imageLeft, imageTop);
      //   canvas.toBlob(async (blob) => {
      //     if (blob) {
      //       const uploadedFile = new File([blob], name, { type: file.type });
      //       const fileRef = ref(firebaseStorage, `/avatars/${name}`);
      // await uploadBytes(fileRef, uploadedFile);
      //     }
      //   }, file.type);
    }
  };

  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageContainerRef = useRef<HTMLImageElement | null>(null);

  const docMouseMove = useCallback((e: MouseEvent) => {
    e = e || window.event;
    e.preventDefault();
    offsetX = startX - e.clientX;
    offsetY = startY - e.clientY;
    startX = e.clientX;
    startY = e.clientY;
    if (imageContainerRef.current) {
      imageTop = imageContainerRef.current.offsetTop - offsetY;
      imageLeft = imageContainerRef.current.offsetLeft - offsetX;
      imageContainerRef.current.style.top = `${imageTop}px`;
      imageContainerRef.current.style.left = `${imageLeft}px`;
    }

    if (imageRef.current) {
      getDrawnCanvasUrl(imageRef.current, imageLeft, imageTop);
    }
  }, []);

  const elemMouseDown = useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => {
      document.addEventListener('mousemove', docMouseMove);
      e = e || window.event;
      e.preventDefault();
      startX = e.clientX;
      startY = e.clientY;
    },
    [docMouseMove],
  );

  const docMouseUp = useCallback(() => {
    if (imageLeft > 0) {
      imageLeft = 0;
    }
    if (imageTop > 0) {
      imageTop = 0;
    }
    document.removeEventListener('mousemove', docMouseMove);
  }, [docMouseMove]);

  const elemWheel = useCallback(() => {
    // TODO scalable
    // if (imageContainerRef.current) {
    //   const scaleStep = 0.01;
    //   if (e.deltaY > 0) {
    //     scale += scaleStep;
    //   } else {
    //     scale -= scaleStep;
    //   }
    //   imageContainerRef.current.style.transform = `scale(${scale})`;
    //   if (imageRef.current && canvasRef.current) {
    //     drawCanvas(
    //       imageRef.current,
    //       canvasRef.current,
    //       imageLeft,
    //       imageTop,
    //     );
    //   }
    // }
  }, []);

  const docTouchMove = useCallback((e: TouchEvent) => {
    e = e || window.event;
    e.preventDefault();
    offsetX = startX - e.touches[0].clientX;
    offsetY = startY - e.touches[0].clientY;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    if (imageContainerRef.current) {
      imageContainerRef.current.style.top =
        imageContainerRef.current.offsetTop - offsetY + 'px';
      imageContainerRef.current.style.left =
        imageContainerRef.current.offsetLeft - offsetX + 'px';
    }
  }, []);

  const elemTouchStart = useCallback(
    (e: React.TouchEvent<HTMLImageElement>) => {
      document.addEventListener('touchmove', docTouchMove);
      e = e || window.event;
      e.preventDefault();
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    [docTouchMove],
  );

  const docTouchEnd = useCallback(() => {
    document.removeEventListener('mousemove', docMouseMove);
  }, [docMouseMove]);

  useEffect(() => {
    document.addEventListener('mouseup', docMouseUp);
    document.addEventListener('touchend', docTouchEnd);
    return () => {
      document.removeEventListener('mousemove', docMouseMove);
      document.removeEventListener('mouseup', docMouseUp);
      document.removeEventListener('touchmove', docTouchMove);
      document.removeEventListener('touchend', docTouchEnd);
    };
  }, [docMouseMove, docMouseUp, docTouchEnd, docTouchMove]);

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
              <div
                className={classes.containerUploaded}
                onMouseLeave={docMouseUp}
              >
                <div
                  ref={imageContainerRef}
                  onMouseDown={elemMouseDown}
                  onTouchStart={elemTouchStart}
                  onWheel={elemWheel}
                  className={classes.imageUploaded}
                >
                  <img
                    ref={imageRef}
                    alt="avatar"
                    src={fileUrl}
                    id="uploading-avatar"
                  />
                </div>
              </div>
            ) : (
              <>
                <PersonIcon className={classes.icon} />
                <p className={classes.description}>Choose photo</p>
              </>
            )}
            <Input accept="image/*" onChange={changeHandler} />
          </div>
        </div>
        <canvas id="canvas" width="100" height="100"></canvas>
        <div>
          <Button onClick={saveHandler}>Save</Button>
        </div>
      </Modal>
    </>
  );
}
