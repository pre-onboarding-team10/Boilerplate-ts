import React, { useState } from 'react';

const useInput = () => {
  const [inputText, setInputText] = useState('');
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return {
    inputText,
    setInputText,
    handleChangeInput,
  };
};

export default useInput;
