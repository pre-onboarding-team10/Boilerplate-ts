import { SearchResultType } from '../../types/types';
import './Dropdown.css';
import DropdownItem from './DropdownItem';

type DropdownListProps = {
  inputText: string;
  keywordData: SearchResultType;
};

const DropdownList = ({ inputText, keywordData }: DropdownListProps) => {
  return (
    <ul className="dropdown-list">
      {keywordData.map((keyword, index) => (
        <DropdownItem key={index} keyword={keyword} inputText={inputText} />
      ))}
    </ul>
  );
};

export default DropdownList;
