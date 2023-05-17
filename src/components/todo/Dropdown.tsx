import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import useIntersect from '../../hooks/useIntersect';
import DropdownItem from './DropdownItem';
import Spinner from '../icons/Spinner';
import { SetStateType, TodoDataType } from '../../types/types';

type DropDownTpye = {
  keyword: string;
  isLoading: boolean;
  hasNextPage: boolean;
  suggestions: string[];
  getSuggestions: () => Promise<void>;
  setTodos: SetStateType<TodoDataType[]>;
  setInputText: SetStateType<string>;
};

const Dropdown = ({
  keyword,
  isLoading,
  hasNextPage,
  suggestions,
  getSuggestions,
  setTodos,
  setInputText,
}: DropDownTpye) => {
  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isLoading && keyword !== '') {
      getSuggestions();
    }
  });
  if (suggestions.length > 0)
    return (
      <div className="dropdown-parent">
        <div className="dropdown-container">
          <ul className="dropdown-box">
            {suggestions.map((suggestion, index) => (
              <DropdownItem
                key={index}
                suggestion={suggestion}
                keyword={keyword}
                setTodos={setTodos}
                setInputText={setInputText}
              />
            ))}
            {isLoading ? (
              <div className="dropdown-loading">
                <Spinner />
              </div>
            ) : hasNextPage ? (
              <div ref={ref}>
                <IoEllipsisHorizontalSharp />
              </div>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    );
  else return <></>;
};

export default Dropdown;
