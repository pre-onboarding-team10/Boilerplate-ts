import { useEffect, useState } from 'react';

import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import TodoList from '../components/TodoList';
import { getTodoList } from '../api/todo';

const Main = () => {
  // TODO: change any type to todo state type
  const [todoListData, setTodoListData] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
};

export default Main;
