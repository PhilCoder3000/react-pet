import { useEffect } from 'react';

export type KeyCode = 'Space' | 'Enter' | 'Escape';

export const useKeyDownEvent = (
  onKeyDown: (code: KeyCode) => void,
  keyCodes?: KeyCode[],
) => {
  useEffect(() => {
    const keyDownHandler = ({ code }: KeyboardEvent) => {
      if (keyCodes) {
        if (keyCodes.includes(code as KeyCode)) {
          onKeyDown(code as KeyCode);
        }
      } else {
        onKeyDown(code as KeyCode)
      }
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => window.removeEventListener('keydown', keyDownHandler);
  }, [keyCodes, onKeyDown]);
};
