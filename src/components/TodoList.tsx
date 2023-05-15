import React from 'react';
import TodoItem from './TodoItem';
import { ITodoListData } from '../pages/Main';

interface ITodoListProps {
  todos: ITodoListData[];
  setTodos: React.Dispatch<React.SetStateAction<ITodoListData[]>>;
}

const TodoList = ({ todos, setTodos }: ITodoListProps) => {
  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};
export default TodoList;
