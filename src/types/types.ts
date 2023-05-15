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

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export type RecommedListProps = {
  searchKeyword: string;
  onSelect: (option: string) => void;
};
