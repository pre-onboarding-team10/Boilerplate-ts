import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';
import { Todo, SetTodoProps } from '../../interfaces';

interface TodoListProps extends SetTodoProps {
  todos: Todo[];
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map(({ id, title }: Todo) => (
        <TodoItem key={id} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  );
};
export default TodoList;
