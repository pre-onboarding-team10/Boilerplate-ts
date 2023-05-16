import {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import './Todo.css';
import useFocus from '../../hooks/useFocus';
import { SetStateType, TodoDataType } from '../../types/types';
import { handleCreateTodos } from '../../utils/todos';
import RecommendDropDownList from '../recommend/RecommendDropdownList';
import Spinner from '../base/Spinner';
import { FaSearch } from 'react-icons/fa';

type InputTodoProps = {
  setTodos: SetStateType<TodoDataType[]>;
};

const DELAY_IN_MS = 500;

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [debouncedInputText, setDebouncedInputText] = useState<string>('');
  const { ref, setFocus } = useFocus();

  useEffect(setFocus, [setFocus]);

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputText(e.target.value);
  }, []);

  const handleSelectRecommend = useCallback((recommend: string) => {
    setInputText(recommend);
  }, []);

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputText(inputText);
    }, DELAY_IN_MS);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputText]);

  return (
    <>
      <form className="form-container" onSubmit={handleSubmitForm}>
        <FaSearch className="search-icon" />
        <input
          className="input-text"
          placeholder="Add new todo..."
          ref={ref}
          value={inputText}
          onChange={handleChangeInput}
          disabled={isLoading}
          type="text"
        />
        {isLoading && debouncedInputText === '' && <Spinner />}
      </form>

      <RecommendDropDownList
        onSelect={handleSelectRecommend}
        searchKeyword={debouncedInputText}
      />
    </>
  );
};

export default InputTodo;
