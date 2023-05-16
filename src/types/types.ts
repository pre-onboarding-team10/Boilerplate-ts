import React,{ Dispatch, SetStateAction } from 'react';

export type TodoDataType = {
  result: string[];
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
};

export type TodoInputType = {
  title: string;
};

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export type SuggestType = {
  q: string;
  page: number;
  limit: number;
  qty: number;
  result: string[] | [];
  total: number;
};

export type SuggestionListProps = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setTodos: SetStateType<TodoDataType[]>;
};
