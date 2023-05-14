import TodoItem from './TodoItem';
import { useContext } from 'react';
import { todoContext } from '../pages/Main';
import { FaSpinner } from 'react-icons/fa';

const TodoList = () => {
  const todolistvalue = useContext(todoContext);
  return todolistvalue.todos.length ? (
    <ul>
      {todolistvalue.todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} />
      ))}
    </ul>
  ) : (
    <FaSpinner className="empty-list" />
  );
};
export default TodoList;
