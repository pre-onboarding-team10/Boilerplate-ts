import {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import './Todo.css';
import { FaSpinner } from 'react-icons/fa';
import useFocus from '../../hooks/useFocus';
import { SetStateType, TodoDataType } from '../../types/types';
import ItemButton from './ItemButton';
import { handleCreateTodos } from '../../utils/todos';
import RecommendList from '../recommend/RecommendList';

type InputTodoProps = {
  setTodos: SetStateType<TodoDataType[]>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { ref, setFocus } = useFocus();

  useEffect(setFocus, [setFocus]);

  const handleChangeInput = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const handleSelectRecommend = (recommend: string) => {
    setInputText(recommend);
  };

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
        <input
          className="input-text"
          placeholder="Add new todo..."
          ref={ref}
          value={inputText}
          onChange={handleChangeInput}
          disabled={isLoading}
          type="search"
        />
        {isLoading ? (
          <FaSpinner className="spinner" />
        ) : (
          <ItemButton mode="add" />
        )}
      </form>

      <RecommendList
        onSelect={handleSelectRecommend}
        searchKeyword={inputText}
      />
    </>
  );
};

export default InputTodo;
