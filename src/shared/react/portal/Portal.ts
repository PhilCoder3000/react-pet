import { PropsWithChildren, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export function Portal({ children }: PropsWithChildren) {
  const portalRef = useRef(document.getElementById('portal'));
  const containerRef = useRef(document.createElement('div'));

  useEffect(() => {
    const { current: portal } = portalRef;
    const { current: container } = containerRef;

    if (portal) {
      portal.appendChild(container);
    }
    return () => {
      if (portal) {
        portal.removeChild(container);
      }
    };
  }, []);

  return ReactDOM.createPortal(children, containerRef.current);
}
