import { useRef, RefObject } from 'react';

type UseFocusReturnType = {
  ref: RefObject<HTMLInputElement>;
  setFocus: () => void;
};

const useFocus = (): UseFocusReturnType => {
  const ref = useRef<HTMLInputElement>(null);

  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  return { ref, setFocus };
};

export default useFocus;
