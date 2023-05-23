import { createTodo, deleteTodo, getTodoList } from '../api/todo';
import { SetStateType, TodoDataType } from '../types/types';

export const handleCreateTodos = async (
  inputText: string,
  setTodos: SetStateType<TodoDataType[]>
): Promise<void> => {
  try {
    const trimmed = inputText.trim();

    if (!trimmed) {
      return alert('Please write something');
    }

    const newItem = { title: trimmed };
    const { data } = await createTodo(newItem);
    if (data) {
      setTodos(prev => [...prev, data]);
    }
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong.');
  }
};

export const handleGetTodos = async ({
  setTodoListData,
}: {
  setTodoListData: SetStateType<TodoDataType[] | []>;
}) => {
  const { data } = await getTodoList();
  setTodoListData(data || []);
};

export const handleRemoveTodo = async (
  id: string,
  setTodos: SetStateType<TodoDataType[]>
): Promise<void> => {
  try {
    await deleteTodo(id);
    setTodos(prev => prev.filter(item => item.id !== id));
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong.');
  }
};
