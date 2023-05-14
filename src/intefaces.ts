import { Dispatch, SetStateAction } from 'react';

interface Todo {
  id: number;
  title: string;
}

interface SetTodoProps {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export type { Todo, SetTodoProps };
