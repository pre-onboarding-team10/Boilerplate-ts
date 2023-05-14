export interface TodoItemProps {
  id: number;
  title: string;
}

export interface UseFocusProps {
  ref: any;
  setFocus: () => void;
}

export interface TodoListContextProps {
  todos: never[];
  setTodos: React.Dispatch<React.SetStateAction<never[]>>;
}
