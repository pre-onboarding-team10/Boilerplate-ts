import { useCallback, useState } from 'react';
import { TodoItemProps } from '../../types/types';
import { handleRemoveTodo } from '../../utils/todos';
import Spinner from '../base/Spinner';
import DeleteButton from './DeleteButton';

const TodoItem = ({ id, title, setTodos }: TodoItemProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodoCallback = useCallback(async () => {
    try {
      setIsLoading(true);
      await handleRemoveTodo(id, setTodos);
    } catch (error) {
      console.error(error);
      throw new Error('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {isLoading ? (
          <Spinner />
        ) : (
          <DeleteButton handleDelete={handleRemoveTodoCallback} />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
