import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import './Todo.css';
import { FaSpinner } from 'react-icons/fa';
import useFocus from '../../hooks/useFocus';
import { SetStateType, TodoDataType } from '../../types/types';
import ItemButton from './ItemButton';
import { handleCreateTodos } from '../../utils/todos';
import { suggestionData } from '../../api/todo';
import useDebounce from '../../utils/debounce';
import SuggestionsDropdown from '../dropDown/SuggestionsDropdown';

type InputTodoProps = {
  setTodos: SetStateType<TodoDataType[]>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { ref, setFocus } = useFocus();

  const debouncedInputText = useDebounce(inputText.toLowerCase(), 500);

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

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await suggestionData(debouncedInputText);
        const result = (response as { result: string[] }).result;
        setSuggestions(result);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    if (debouncedInputText) {
      fetchSuggestions();
    }
  }, [debouncedInputText]);

  return (
    <form className="form-container" onSubmit={handleSubmitForm}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        disabled={isLoading}
      />

      {suggestions.length > 0 && (
        <SuggestionsDropdown
          suggestions={suggestions}
          setSuggestions={setSuggestions}
          debouncedInputText={debouncedInputText}
          setTodos={setTodos}
          setInputText={setInputText}
        />
      )}

      {!isLoading ? (
        <ItemButton mode="add" />
      ) : (
        <FaSpinner className="spinner" />
      )}
    </form>
  );
};

export default InputTodo;
