import { useEffect, useState, UIEvent } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { RecommedListProps } from '../../types/types';
import { handleGetRecommends } from '../../utils/recommends';
import './Recommend.css';
import RecommendItem from './RecommendItem';

const DELAY_IN_MS = 500;
const INITIAL_PAGE = 1;
const PAGE_SIZE = 10;
//TODO Loading 처리 필요
const RecommendList = ({ searchKeyword, onSelect }: RecommedListProps) => {
  const [recommedDataList, setRecommendDataList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [hasMoreData, setHasMoreData] = useState(true);

  const handleSelectOption = (option: string) => {
    onSelect(option);
  };

  const handleScroll = (event: UIEvent<HTMLUListElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollTop + clientHeight >= scrollHeight && hasMoreData) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE);
    setRecommendDataList([]);
    setHasMoreData(true);
  }, [searchKeyword]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchKeyword.length > 0) {
        handleGetRecommends(
          searchKeyword,
          setRecommendDataList,
          currentPage,
          PAGE_SIZE
        ).then(data => {
          if (data.qty < PAGE_SIZE) {
            setHasMoreData(false);
          }
          setRecommendDataList(prev => [...prev, ...data.result]);
        });
        return;
      }
      setRecommendDataList([]);
      setHasMoreData(true);
    }, DELAY_IN_MS);
    return () => clearTimeout(timer);
  }, [searchKeyword, currentPage]);

  if (recommedDataList.length === 0) return null;
  //TODO CSS 보완
  return (
    <ul className="recommend_list" onScroll={handleScroll}>
      {recommedDataList.map((option, index) => (
        <RecommendItem
          key={option}
          option={option}
          selectItem={handleSelectOption}
          searchKeyword={searchKeyword}
        />
      ))}
      {hasMoreData && (
        <li className="more_data">
          <FaEllipsisH />
        </li>
      )}
    </ul>
  );
};

export default RecommendList;
