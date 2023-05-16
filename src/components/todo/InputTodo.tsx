import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import './Todo.css';
import { ImSpinner8 } from 'react-icons/im';
import useFocus from '../../hooks/useFocus';
import { SetStateType, TodoDataType } from '../../types/types';
import { handleCreateTodos } from '../../utils/todos';
import SuggestionList from '../suggest/SuggestionList';
import { BiSearch } from 'react-icons/bi';

type InputTodoProps = {
  setTodos: SetStateType<TodoDataType[]>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { ref, setFocus } = useFocus();

  useEffect(setFocus, [setFocus]);

  const handleSubmitForm = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      await handleCreateTodos(inputText, setTodos);
      setIsLoading(false);
      setInputText('');
    },
    [inputText, setTodos]
  );

  return (
    <>
      <form className="form-container" onSubmit={handleSubmitForm}>
        <BiSearch className="searcher" />
        <input
          className="input-text"
          placeholder="Placeholder"
          ref={ref}
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          disabled={isLoading}
        />
        {!isLoading ? null : <ImSpinner8 className="spinner" />}
      </form>
      <SuggestionList
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
      />
    </>
  );
};

export default InputTodo;
