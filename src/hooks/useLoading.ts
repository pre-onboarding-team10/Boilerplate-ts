import { useState } from 'react';

type useLoadingReturnType = [boolean, () => void];

const useLoading = (state: boolean): useLoadingReturnType => {
  const [isLoading, setIsLoading] = useState(state);

  const toggleLoading = () => {
    setIsLoading(pre => !pre);
  };

  return [isLoading, toggleLoading];
};

export default useLoading;
