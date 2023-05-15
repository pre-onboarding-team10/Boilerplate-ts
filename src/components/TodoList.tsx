import TodoItem from './TodoItem';
import useTodo from '../hooks/useTodo';

const TodoList = () => {
  const { todoListData } = useTodo();

  if (!todoListData.length) {
    return (
      <>
        <div className="empty-list">...</div>
      </>
    );
  }

  return (
    <ul>
      {todoListData?.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} />
      ))}
    </ul>
  );
};
export default TodoList;
