import { useEffect, useState, UIEvent } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { RecommendListProps } from '../../types/types';
import { handleGetRecommends } from '../../utils/recommends';
import './Recommend.css';
import RecommendItem from './RecommendItem';
import Spinner from '../base/Spinner';

const DELAY_IN_MS = 500;
const INITIAL_PAGE = 1;
const PAGE_SIZE = 10;

const RecommendDropDownList = ({ searchKeyword, onSelect }: RecommendListProps) => {
  const [recommendDataList, setRecommendDataList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectOption = (option: string) => {
    onSelect(option);
  };

  const handleScroll = (event: UIEvent<HTMLUListElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollTop + clientHeight >= scrollHeight && hasMoreData && !isLoading) {
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
        setIsLoading(true);
        handleGetRecommends(searchKeyword, currentPage, PAGE_SIZE).then(
          data => {
            setIsLoading(false);
            if (data.qty < PAGE_SIZE) {
              setHasMoreData(false);
            }
            setRecommendDataList(prev => [...prev, ...data.result]);
          }
        );
        return;
      }
      setRecommendDataList([]);
      setHasMoreData(true);
    }, DELAY_IN_MS);
    return () => clearTimeout(timer);
  }, [searchKeyword, currentPage]);

  if (recommendDataList.length === 0) return null;

  return (
    <ul className="recommend_list" onScroll={handleScroll}>
      {recommendDataList.map((option, index) => (
        <RecommendItem
          key={option}
          option={option}
          selectItem={handleSelectOption}
          searchKeyword={searchKeyword}
        />
      ))}
      {isLoading && <li className="loading_data"><Spinner /></li>}
      {hasMoreData && !isLoading && (
        <li className="more_data">
          <FaEllipsisH />
        </li>
      )}
    </ul>
  );
};

export default RecommendDropDownList;
