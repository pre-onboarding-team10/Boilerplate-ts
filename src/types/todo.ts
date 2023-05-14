import React from 'react';
export interface TodoItemProps {
  id: number;
  title: string;
}

export interface UseFocusProps {
  ref: React.LegacyRef<HTMLInputElement>
  setFocus: () => void;
}

export interface TodoListContextProps {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<never[]>>;
}

interface TodoType{
  id: number;
  title: string;
}