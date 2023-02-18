import { PropsWithChildren, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  uuid?: string;
}

export function Portal({ children }: PropsWithChildren) {
  const portalRef = useRef(document.getElementById('portal'));
  const containerRef = useRef(document.createElement('div'));
  useEffect(() => {
    portalRef.current.appendChild(containerRef.current);
    return () => {
      portalRef.current.removeChild(containerRef.current);
    };
  }, []);
  return ReactDOM.createPortal(children, containerRef.current);
}
