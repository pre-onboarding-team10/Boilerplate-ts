import { FormEvent, ChangeEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { createTodo } from '../../api/todo';
import useFocus from '../../hooks/useFocus';
import styles from './InputTodo.module.css';
import AddButton from '../AddButton/AddButton';
import Spinner from '../Spinner/Spinner';
import { SetTodoProps } from '../../intefaces';

const PLACEHOLDER_TEXT = 'Add new todo...';

const InputTodo = ({ setTodos }: SetTodoProps) => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { ref, setFocus } = useFocus<HTMLInputElement>();

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          return alert('Please write something');
        }

        const newItem = { title: trimmed };
        const { data } = await createTodo(newItem);

        if (data) {
          return setTodos(prev => [...prev, data]);
        }
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      } finally {
        setInputText('');
        setIsLoading(false);
      }
    },
    [inputText, setTodos]
  );

  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <input
        className={styles.input_text}
        placeholder={PLACEHOLDER_TEXT}
        ref={ref}
        value={inputText}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      {!isLoading ? <AddButton /> : <Spinner />}
    </form>
  );
};

export default InputTodo;
