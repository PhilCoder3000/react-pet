import { MutableRefObject, useEffect } from 'react';

export function useOutsideClick(ref: MutableRefObject<any>, onOutsideClick: () => void) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target)) {
        onOutsideClick()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}