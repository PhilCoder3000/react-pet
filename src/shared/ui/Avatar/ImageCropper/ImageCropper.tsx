import { useCallback, useEffect, useRef } from 'react';
import classes from './ImageCropper.module.scss';

interface ImageCropperProps {
  src: string;
}

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;
let pos4 = 0;

export function ImageCropper({ src }: ImageCropperProps) {
  const elem = useRef<HTMLImageElement | null>(null);

  const docMouseMove = useCallback((e: MouseEvent) => {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    if (elem.current) {
      elem.current.style.top = elem.current.offsetTop - pos2 + 'px';
      elem.current.style.left = elem.current.offsetLeft - pos1 + 'px';
    }
  }, []);

  const elemMouseDown = useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => {
      document.addEventListener('mousemove', docMouseMove);
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
    },
    [docMouseMove],
  );

  const docMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', docMouseMove);
  }, [docMouseMove]);

  const docTouchMove = useCallback((e: TouchEvent) => {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.touches[0].clientX;
    pos2 = pos4 - e.touches[0].clientY;
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    if (elem.current) {
      elem.current.style.top = elem.current.offsetTop - pos2 + 'px';
      elem.current.style.left = elem.current.offsetLeft - pos1 + 'px';
    }
  }, []);

  const elemTouchStart = useCallback(
    (e: React.TouchEvent<HTMLImageElement>) => {
      document.addEventListener('touchmove', docTouchMove);
      e = e || window.event;
      e.preventDefault();
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
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

  // const [crop, setCrop] = useState()

  return (
    <div className={classes.container} onMouseLeave={docMouseUp}>
      <div
        ref={elem}
        onMouseDown={elemMouseDown}
        onTouchStart={elemTouchStart}
        className={classes.image}
      >
        <img alt="avatar" src={src} />
      </div>
    </div>
  );
}
