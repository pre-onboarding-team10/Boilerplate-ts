import { FaSpinner, FaTrash } from 'react-icons/fa';
import { useCallback } from 'react';

import { deleteTodo } from '../api/todo';

import useLoading from '../hooks/useLoading';
import useTodo from '../hooks/useTodo';

interface ITodoItemProps {
  id: number;
  title: string;
}

const TodoItem = ({ id, title }: ITodoItemProps) => {
  const { isLoading, setIsLoading } = useLoading();
  const { setTodoListData: setTodos } = useTodo();
  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      setTodos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button onClick={() => handleRemoveTodo()}>
            <FaTrash className="btn-trash" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
