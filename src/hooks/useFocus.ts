import { useCallback, useRef } from 'react';

const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setFocus = useCallback(() => {
    ref.current && ref.current.focus();
  }, [ref]);

  return { ref, setFocus };
};

export default useFocus;
