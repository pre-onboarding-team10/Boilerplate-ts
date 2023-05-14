import { useRef, RefObject } from 'react';

interface FocusRef<T> {
  ref: RefObject<T>;
  setFocus: () => void;
}

const useFocus = <T extends HTMLElement>(): FocusRef<T> => {
  const ref = useRef<T>(null);
  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  return { ref, setFocus };
};

export default useFocus;
