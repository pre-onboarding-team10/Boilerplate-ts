import { RecommendItemProps } from '../../types/types';
import './Recommend.css';

const RecommendItem = ({
  option,
  selectItem,
  searchKeyword,
}: RecommendItemProps) => {
  const handleClick = () => {
    selectItem(option);
  };
  const index = option.toLowerCase().indexOf(searchKeyword.toLowerCase());

  return (
    <li className="recommend_item" onClick={handleClick}>
      {index !== -1 ? (
        <>
          <span>{option.substring(0, index)}</span>
          <strong className="highlight">
            {option.substring(index, index + searchKeyword.length)}
          </strong>
          <span>{option.substring(index + searchKeyword.length)}</span>
        </>
      ) : (
        <span>{option}</span>
      )}
    </li>
  );
};

export default RecommendItem;
