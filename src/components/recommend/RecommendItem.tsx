import './Recommend.css';

type RecommedItemProps = {
  option: string;
  selectItem: (option: string) => void;
  searchKeyword: string;
};

const RecommendItem = ({
  option,
  selectItem,
  searchKeyword,
}: RecommedItemProps) => {
  const handleClick = () => {
    selectItem(option);
  };
  const index = option.toLowerCase().indexOf(searchKeyword.toLowerCase());

  return (
    <li key={option} className="recommend_item" onClick={handleClick}>
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
