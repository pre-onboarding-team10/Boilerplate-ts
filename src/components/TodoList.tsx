import TodoItem from './TodoItem';

interface Props {
  // TODO: change any type to todo state type
  todos: any[];
  // TODO: change any type to todo state type
  setTodos: React.Dispatch<React.SetStateAction<any[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
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
