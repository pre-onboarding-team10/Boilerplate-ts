import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import TodoList from '../components/TodoList';

import useTodo from '../hooks/useTodo';

const Main = () => {
  useTodo();

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default Main;
