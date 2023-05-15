import { useCallback } from 'react';

import Spinner from '../../assets/svg/Spinner';
import useLoading from '../../hooks/useLoading';
import { SetStateType, TodoDataType } from '../../types/types';
import { handleRemoveTodo } from '../../utils/todos';
import DeleteButton from './DeleteButton';

type TodoItemProps = {
  id: string;
  title: string;
  setTodos: SetStateType<TodoDataType[]>;
};

const TodoItem = ({ id, title, setTodos }: TodoItemProps) => {
  const [isLoading, deleteTodo] = useLoading(handleRemoveTodo);

  const hanldeClickRemove = useCallback(async () => {
    deleteTodo(id, setTodos);
  }, [id, setTodos, deleteTodo]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {isLoading ? (
          <Spinner />
        ) : (
          <DeleteButton handleClick={hanldeClickRemove} />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
