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

        {isLoading ? <Spinner />: null}
      </form>

      <RecommendDropDownList
        onSelect={handleSelectRecommend}
        searchKeyword={inputText}
      />
    </>
  );
};

export default InputTodo;
