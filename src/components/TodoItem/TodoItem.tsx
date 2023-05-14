import { useCallback, useState } from 'react';
import { deleteTodo } from '../../api/todo';
import styles from './TodoItem.module.css';
import Spinner from '../Spinner/Spinner';
import { SetTodoProps, Todo } from '../../intefaces';
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({
  id,
  title,
  setTodos,
}: {
  id: Todo['id'];
  title: Todo['title'];
  setTodos: SetTodoProps['setTodos'];
}) => {
  const [isLoading, setIsLoading] = useState(false);

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
    <li className={styles.item}>
      <span>{title}</span>
      <div className={styles.item_option}>
        <button onClick={handleRemoveTodo} disabled={isLoading}>
          {isLoading ? <Spinner /> : <FaTrash className={styles.btn_trash} />}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
