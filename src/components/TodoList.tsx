import TodoItem from './TodoItem';
import useTodo from '../hooks/useTodo';

const TodoList = () => {
  const { todoListData } = useTodo();

  return todoListData.length ? (
    <ul>
      {todoListData.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};
export default TodoList;
