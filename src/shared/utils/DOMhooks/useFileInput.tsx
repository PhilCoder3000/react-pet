import { forwardRef, InputHTMLAttributes, useCallback, useRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => <input ref={ref} type="file" hidden {...props} />,
);

export function useFileInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const openFileDialog = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const Input = useCallback(
    (props: InputProps) => <InputComponent {...props} ref={inputRef} />,
    [],
  );

  return {
    Input,
    openFileDialog,
  };
}
