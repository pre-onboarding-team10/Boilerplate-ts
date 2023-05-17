import { useCallback, useState } from 'react';

import { SetStateType, TodoDataType } from '../../types/types';
import { handleRemoveTodo } from '../../utils/todos';
import Spinner from '../icons/Spinner';
import RemoveButton from '../icons/RemoveButton';

type TodoItemProps = {
  id: string;
  title: string;
  setTodos: SetStateType<TodoDataType[]>;
};

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
        {!isLoading ? (
          <RemoveButton handleClick={handleRemoveTodoCallback} />
        ) : (
          <Spinner />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
