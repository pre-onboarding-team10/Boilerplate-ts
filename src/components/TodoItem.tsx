import { FaSpinner, FaTrash } from 'react-icons/fa';
import React, { useCallback, useState } from 'react';
import { useContext } from 'react';
import { todoContext } from '../pages/Main';
import { deleteTodo } from '../api/todo';
import { TodoItemProps } from '../types/todo';

const TodoItem = ({ id, title }: TodoItemProps) => {
  const todolistvalue = useContext(todoContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      todolistvalue.todos = todolistvalue.todos.filter(
        (item: { id: number }) => item.id !== id
      );
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id]);

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
