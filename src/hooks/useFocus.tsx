import { useRef } from 'react';

interface UseFocusProps {
  ref: any;
  setFocus: () => void;
}

const useFocus = (): UseFocusProps => {
  const ref = useRef<HTMLElement>(null);
  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  return { ref, setFocus };
};

export default useFocus;
