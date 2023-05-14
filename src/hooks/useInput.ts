import React, { useState } from 'react';

type useInputReturnType = {
  inputText: string;
  onChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearInputText: () => void;
  isEmptyInputText: () => boolean;
};
const useInput = (): useInputReturnType => {
  const [inputText, setInputText] = useState('');

  const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const clearInputText = () => {
    setInputText('');
  };

  const isEmptyInputText = () => Boolean(inputText.trim());

  return { inputText, onChangeInputText, clearInputText, isEmptyInputText };
};

export default useInput;
