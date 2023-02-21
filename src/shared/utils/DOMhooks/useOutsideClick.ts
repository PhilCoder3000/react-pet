import { MutableRefObject, useEffect } from 'react';

export function useOutsideClick(ref: MutableRefObject<HTMLDivElement>, onOutsideClick: () => void) {
  useEffect(() => {
    function handleClickOutside({ target }: MouseEvent) {
      if (ref.current && !ref.current.contains(target as Node)) {
        onOutsideClick()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick, ref]);
}