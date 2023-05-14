import { FaPlusCircle, FaSpinner } from 'react-icons/fa';
import React, { LegacyRef, useCallback, useEffect } from 'react';

import { createTodo } from '../api/todo';
import useFocus from '../hooks/useFocus';
import { TodoType } from '../types/todo';
import useInput from '../hooks/useInput';
import useLoading from '../hooks/useLoading';

type InputTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const { inputText, onChangeInputText, clearInputText, isEmptyInputText } =
    useInput();
  const [isLoading, toggleLoading] = useLoading(false);
  const { ref, setFocus } = useFocus();

  useEffect(setFocus, [setFocus]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    async e => {
      try {
        if (!isEmptyInputText()) return alert('Please write something');

        e.preventDefault();
        toggleLoading();

        const newItem = { title: inputText };
        const { data } = await createTodo(newItem);

        if (data) return setTodos(prev => [...prev, data]);
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      } finally {
        clearInputText();
        toggleLoading();
      }
    },
    [inputText, setTodos, clearInputText, isEmptyInputText, toggleLoading]
  );

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref as LegacyRef<HTMLInputElement>}
        value={inputText}
        onChange={onChangeInputText}
        disabled={isLoading}
      />
      {!isLoading ? (
        <button className="input-submit" type="submit">
          <FaPlusCircle className="btn-plus" />
        </button>
      ) : (
        <FaSpinner className="spinner" />
      )}
    </form>
  );
};

export default InputTodo;
