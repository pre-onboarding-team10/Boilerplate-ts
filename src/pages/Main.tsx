import React, { useEffect, useState, createContext } from 'react';

import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import TodoList from '../components/TodoList';
import { getTodoList } from '../api/todo';

interface TodoListContextProps {
  todos: never[];
  setTodos: React.Dispatch<React.SetStateAction<never[]>>;
}

export const todoContext = createContext<TodoListContextProps>({
  todos: [],
  setTodos: () => {},
});

const Main = () => {
  const [todoListData, setTodoListData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, [todoListData]);

  return (
    <div className="container">
      <div className="inner">
        <todoContext.Provider
          value={{ todos: todoListData, setTodos: setTodoListData }}
        >
          <Header />
          <InputTodo />
          <TodoList />
        </todoContext.Provider>
      </div>
    </div>
  );
};

export default Main;
