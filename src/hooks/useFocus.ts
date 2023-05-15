import { useRef, useEffect } from 'react';

const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  return { ref, setFocus };
};

export default useFocus;
