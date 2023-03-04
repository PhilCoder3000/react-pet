import { useCallback, useEffect, useRef } from 'react';
import classes from './ImageCropper.module.scss';

let offsetX = 0;
let offsetY = 0;
let startX = 0;
let startY = 0;
let imageTop = 0;
let imageLeft = 0;

const getCroppedCanvas = (
  image: HTMLImageElement,
  left: number,
  top: number,
) => {
  const canvas = document.createElement('canvas');
  if (canvas) {
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const scale = 2.5;
      const sx = -left,
        sy = -top,
        sw = Number(image.width),
        sh = Number(image.height),
        dx = -sx / 80,
        dy = -sy / 80,
        dw = sw / scale,
        dh = sh / scale;

      ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
  return canvas;
};
interface ImageCropperProps {
  src: string;
  setCroppedCanvas: React.Dispatch<
    React.SetStateAction<HTMLCanvasElement | null>
  >;
}

export function ImageCropper({ src }: ImageCropperProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageContainerRef = useRef<HTMLImageElement | null>(null);

  const docMouseMove = useCallback((e: MouseEvent) => {
    e = e || window.event;
    e.preventDefault();
    offsetX = startX - e.clientX;
    offsetY = startY - e.clientY;
    startX = e.clientX;
    startY = e.clientY;
    if (imageContainerRef.current && imageRef.current) {
      imageTop = imageContainerRef.current.offsetTop - offsetY;
      imageLeft = imageContainerRef.current.offsetLeft - offsetX;
      const minLeft = -imageRef.current.width + 250;
      const minTop = -imageRef.current.height + 250;
      if (
        imageTop <= 0 &&
        imageLeft <= 0 &&
        imageLeft >= minLeft &&
        imageTop >= minTop
      ) {
        imageContainerRef.current.style.top = `${imageTop}px`;
        imageContainerRef.current.style.left = `${imageLeft}px`;
      }
    }

    if (imageRef.current) {
      getCroppedCanvas(imageRef.current, imageLeft, imageTop);
    }
  }, []);

  const docMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', docMouseMove);
  }, [docMouseMove]);

  const elemMouseDown = useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => {
      document.addEventListener('mousemove', docMouseMove);
      document.addEventListener('mouseup', docMouseUp);
      e = e || window.event;
      e.preventDefault();
      startX = e.clientX;
      startY = e.clientY;
    },
    [docMouseMove, docMouseUp],
  );

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

  const docTouchEnd = useCallback(() => {
    document.removeEventListener('mousemove', docMouseMove);
  }, [docMouseMove]);

  const elemTouchStart = useCallback(
    (e: React.TouchEvent<HTMLImageElement>) => {
      document.addEventListener('touchmove', docTouchMove);
      document.addEventListener('touchend', docTouchEnd);

      e = e || window.event;
      e.preventDefault();
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    [docTouchEnd, docTouchMove],
  );

  useEffect(
    () => () => {
      document.removeEventListener('mousemove', docMouseMove);
      document.removeEventListener('mouseup', docMouseUp);
      document.removeEventListener('touchmove', docTouchMove);
      document.removeEventListener('touchend', docTouchEnd);
    },
    [docMouseMove, docMouseUp, docTouchEnd, docTouchMove],
  );

  return (
    <div className={classes.container} onMouseLeave={docMouseUp}>
      <div
        ref={imageContainerRef}
        onMouseDown={elemMouseDown}
        onTouchStart={elemTouchStart}
        onWheel={elemWheel}
        className={classes.image}
      >
        <img ref={imageRef} alt="avatar" src={src} id="uploading-avatar" />
      </div>
    </div>
  );
}
