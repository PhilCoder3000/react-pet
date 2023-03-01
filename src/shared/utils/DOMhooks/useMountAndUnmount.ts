import { useEffect, useRef, useState } from 'react';

export const useMountAndUnmount = (isShow: boolean, delay = 300) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (isShow && !shouldRender) {
      setShouldRender(true);
      setTimeout(() => setAnimation(true), 40);
    } else if (!isShow && shouldRender) {
      setAnimation(false);
      timeoutRef.current = setTimeout(() => setShouldRender(false), delay);
    }
    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [delay, isShow, shouldRender]);

  return {
    shouldRender,
    animation,
  };
};
