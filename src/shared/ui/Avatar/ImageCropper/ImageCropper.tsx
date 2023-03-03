import { useCallback, useEffect, useRef } from 'react';
import classes from './ImageCropper.module.scss';

interface ImageCropperProps {
  src: string;
}

let offsetX = 0;
let offsetY = 0;
let startX = 0;
let startY = 0;
let scale = 1;
let imageTop = 0;
let imageLeft = 0;

export function ImageCropper({ src }: ImageCropperProps) {
  const imageRef = useRef<HTMLImageElement | null>(null)
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

    const img = document.getElementById(
      'uploading-avatar',
    ) as CanvasImageSource;
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx && img) {
      const sx = -startX / 2,
        sy = -startY / 2,
        sw = Number(img.width),
        sh = Number(img.height),
        dx = -sx / 4,
        dy = -sy / 4,
        dw = sw / 4,
        dh = sh / 4;
      ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
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
      imageContainerRef.current.style.top = imageContainerRef.current.offsetTop - offsetY + 'px';
      imageContainerRef.current.style.left = imageContainerRef.current.offsetLeft - offsetX + 'px';
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
    <div className={classes.container} onMouseLeave={docMouseUp}>
      <div
        ref={imageContainerRef}
        onMouseDown={elemMouseDown}
        onTouchStart={elemTouchStart}
        onScroll={() => console.log('scroll')}
        onTouchMove={() => console.log('touch move')}
        onWheel={elemWheel}
        className={classes.image}
      >
        <img ref={imageRef} alt="avatar" src={src} id="uploading-avatar" />
      </div>
    </div>
  );
}
