import React, { useState } from 'react';

type useInputReturnType = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
];

const useInput = (): useInputReturnType => {
  const [input, setInput] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const clearInput = () => {
    setInput('');
  };

  return [input, onChangeInput, clearInput];
};

export default useInput;
