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
let scale = 1;
let imageTop = 0;
let imageLeft = 0;

const drawCanvas = (
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  left: number,
  top: number,
) => {
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const defaultXScale = canvas.width / image.width;
    const defaultYScale = canvas.height / image.height;
    const delimiter = 250 / 100;
    const sx = -left / delimiter,
      sy = -top / delimiter,
      sw = Number(image.width),
      sh = Number(image.height),
      dx = -sx * defaultXScale * delimiter,
      dy = -sy * defaultYScale * delimiter,
      dw = sw / delimiter,
      dh = sh / delimiter;

    ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  }
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

  const saveHandler = () => {
    console.log(file);
  };

  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageContainerRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    if (imageRef.current && canvasRef.current) {
      drawCanvas(
        imageRef.current,
        canvasRef.current,
        imageLeft,
        imageTop,
      );
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
    document.removeEventListener('mousemove', docMouseMove);
  }, [docMouseMove]);

  const elemWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (imageContainerRef.current) {
      const scaleStep = 0.01;
      if (e.deltaY > 0) {
        scale += scaleStep;
      } else {
        scale -= scaleStep;
      }
      imageContainerRef.current.style.transform = `scale(${scale})`;
      if (imageRef.current && canvasRef.current) {
        drawCanvas(
          imageRef.current,
          canvasRef.current,
          imageLeft,
          imageTop,
        );
      }
    }
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
                  onScroll={() => console.log('scroll')}
                  onTouchMove={() => console.log('touch move')}
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
        <div>
          <canvas ref={canvasRef} width="100" height="100"></canvas>
        </div>
        <div>
          <Button onClick={saveHandler}>Save</Button>
        </div>
      </Modal>
    </>
  );
}
