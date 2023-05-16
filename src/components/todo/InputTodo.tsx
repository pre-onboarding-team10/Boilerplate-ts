import { SyntheticEvent, useCallback, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

import Spinner from '../../assets/svg/Spinner';
import useFetchKeyword from '../../hooks/useFetchKeyword';
import useFocus from '../../hooks/useFocus';
import useInput from '../../hooks/useInput';
import useLoading from '../../hooks/useLoading';
import { SetStateType, TodoDataType } from '../../types/types';
import { handleCreateTodos } from '../../utils/todos';
import DropdownList from '../search/DropdownList';
import './Todo.css';

type InputTodoProps = {
  setTodos: SetStateType<TodoDataType[]>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [isLoading, createTodos] = useLoading<void>(handleCreateTodos);
  const [inputText, handleChange] = useInput();
  const { keywordData, isLoading: isKeywordLoading } =
    useFetchKeyword(inputText);
  const { ref, setFocus } = useFocus<HTMLInputElement>();

  const isEmptyData = keywordData.length === 0;

  const handleSubmitForm = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      createTodos(inputText, setTodos);
      handleChange('');
    },
    [inputText, setTodos, createTodos, handleChange]
  );

  useEffect(setFocus, [setFocus]);

  return (
    <div className="search-container">
      <form className="form-container" onSubmit={handleSubmitForm}>
        <div className="input-container">
          <FaSearch color="#7D7D7D" />
          <input
            className="input-text ellipsis"
            placeholder="Add new todo..."
            ref={ref}
            value={inputText}
            onChange={e => handleChange(e.target.value)}
            disabled={isLoading}
          />
        </div>
        {(isLoading || isKeywordLoading) && (
          <Spinner className="spinner_input" />
        )}
      </form>
      {!isEmptyData && (
        <DropdownList
          handleChange={handleChange}
          keywordData={keywordData}
          setTodos={setTodos}
        />
      )}
    </div>
  );
};

export default InputTodo;
