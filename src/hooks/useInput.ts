import { useState } from 'react';

const useInput = (): [string, (value: string) => void] => {
  const [inputText, setInputText] = useState('');

  const handleChange = (value: string) => {
    setInputText(value);
  };

  return [inputText, handleChange];
};

export default useInput;
