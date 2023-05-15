import React from 'react';
import { FaSpinner, FaTrash } from 'react-icons/fa';
import { useCallback } from 'react';

import { deleteTodo } from '../api/todo';
import { ITodoListData } from '../pages/Main';
import useLoading from '../hooks/useLoading';

interface ITodoItemProps {
  id: number;
  title: string;
  setTodos: React.Dispatch<React.SetStateAction<ITodoListData[]>>;
}

const TodoItem = ({ id, title, setTodos }: ITodoItemProps) => {
  const { isLoading, setIsLoading } = useLoading();
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
