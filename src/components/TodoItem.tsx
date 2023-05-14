import { FaSpinner, FaTrash } from 'react-icons/fa';
import React, { useCallback } from 'react';

import { deleteTodo } from '../api/todo';
import { TodoType } from '../types/todo';
import useLoading from '../hooks/useLoading';

type TodoItemProps = {
  id: string;
  title: string;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const TodoItem = ({ id, title, setTodos }: TodoItemProps) => {
  const [isLoading, toggleIsLoading] = useLoading(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      toggleIsLoading();
      await deleteTodo(id);
      setTodos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      toggleIsLoading();
    }
  }, [id, setTodos, toggleIsLoading]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button onClick={handleRemoveTodo}>
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
