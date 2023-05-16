import { Dispatch, SetStateAction } from 'react';

export type TodoDataType = {
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
};

export type TodoInputType = {
  title: string;
};

export type TodoItemProps = {
  id: string;
  title: string;
  setTodos: SetStateType<TodoDataType[]>;
};

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export type RecommendDataType = {
  limit: number;
  page: number;
  q: string;
  qty: number;
  result: string[];
  total: number;
};

export type RecommendListProps = {
  searchKeyword: string;
  onSelect: (option: string) => void;
};

export type RecommendItemProps = {
  option: string;
  selectItem: (option: string) => void;
  searchKeyword: string;
};
