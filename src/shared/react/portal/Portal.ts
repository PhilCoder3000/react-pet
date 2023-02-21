import { PropsWithChildren, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export function Portal({ children }: PropsWithChildren) {
  const portalRef = useRef(document.getElementById('portal'));
  const containerRef = useRef(document.createElement('div'));

  useEffect(() => {
    const { current: portal } = portalRef;
    const { current: container } = containerRef;

    portal.appendChild(container);
    return () => {
      portal.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, containerRef.current);
}
