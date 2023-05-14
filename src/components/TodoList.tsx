import TodoItem from './TodoItem';
import { useContext } from 'react';
import { todoContext } from '../pages/Main';

const TodoList = () => {
  const todolistvalue = useContext(todoContext);
  return todolistvalue.todos.length ? (
    <ul>
      {todolistvalue.todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};
export default TodoList;
