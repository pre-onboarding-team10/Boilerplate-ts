import { useEffect, useState } from 'react';
import { getTodoList } from '../api/todo';

export interface ITodoListData {
  id: number;
  title: string;
}

const useTodo = () => {
  const [todoListData, setTodoListData] = useState<ITodoListData[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return { todoListData, setTodoListData };
};

export default useTodo;
