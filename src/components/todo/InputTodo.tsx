import { useEffect, useState } from 'react';
import './Todo.css';
import useFocus from '../../hooks/useFocus';
import { SetStateType, TodoDataType } from '../../types/types';
import useFetchTodo from '../../hooks/useFetchTodo';
import Dropdown from './Dropdown';
import useFetchSuggestions from '../../hooks/useFetchSuggestions';
import SearchIcon from './SearchIcon';
import AddButton from './AddButton';
import Spinner from '../base/Spinner';

export type InputTodoProps = {
  setTodos: SetStateType<TodoDataType[]>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const { ref, setFocus } = useFocus();
  const { isLoading, inputText, setInputText, handleChange, handleSubmit } =
    useFetchTodo(setTodos);
  const [suggestions, isSuggestionLoading, getSuggestions, hasNextPage] =
    useFetchSuggestions(inputText);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  useEffect(setFocus, [setFocus]);

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div
          className={'form-box' + (isLoading || isTyping ? ' progress' : '')}
        >
          <SearchIcon />
          <input
            className="input-text"
            placeholder="Add new todo..."
            ref={ref}
            value={inputText}
            onChange={handleChange}
            disabled={isLoading}
            onKeyDown={() => setIsTyping(true)}
            onKeyUp={() => setIsTyping(false)}
          />
          {isLoading || isSuggestionLoading ? <Spinner /> : <AddButton />}
        </div>
      </form>
      <Dropdown
        keyword={inputText}
        isLoading={isSuggestionLoading}
        hasNextPage={hasNextPage}
        suggestions={suggestions}
        getSuggestions={getSuggestions}
        setTodos={setTodos}
        setInputText={setInputText}
      />
    </div>
  );
};

export default InputTodo;
