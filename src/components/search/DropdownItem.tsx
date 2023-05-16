import { useRef } from 'react';

import Spinner from '../../assets/svg/Spinner';
import useLoading from '../../hooks/useLoading';
import { SetStateType, TodoDataType } from '../../types/types';
import { handleCreateTodos } from '../../utils/todos';

type DropdownItemProps = {
  keyword: string;
  handleChange: (value: string) => void;
  setTodos: SetStateType<TodoDataType[]>;
};

const DropdownItem = ({
  keyword,
  handleChange,
  setTodos,
}: DropdownItemProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const [isLoading, createTodos] = useLoading<void>(handleCreateTodos);
  const handleClick = async () => {
    createTodos(ref.current?.textContent, setTodos);
    handleChange('');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <li ref={ref} onClick={handleClick} className="dropdown-item ellipsis">
        {keyword}
      </li>
      {isLoading && <Spinner />}
    </div>
  );
};

export default DropdownItem;
