import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import InputTodo from '../components/InputTodo/InputTodo';
import TodoList from '../components/TodoList/TodoList';
import { getTodoList } from '../api/todo';
import EmptyList from '../components/EmptyList/EmptyList';
import { Todo } from '../interfaces';

const Main = () => {
  const [todoListData, setTodoListData] = useState<Todo[]>([]);

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
        {todoListData && todoListData.length > 0 ? (
          <TodoList todos={todoListData} setTodos={setTodoListData} />
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  );
};

export default Main;
