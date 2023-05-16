import { useEffect, useState } from 'react';
import { SearchResultType } from '../types/types';
import { getKeyword } from '../api/search';
import useLoading from './useLoading';

type KeywordReturnType = {
  keywordData: SearchResultType;
  isLoading: boolean;
};

const useFetchKeyword = (inputText: string): KeywordReturnType => {
  const [keywordData, setKeywordData] = useState<SearchResultType>([]);

  const [isLoading, fetchData] = useLoading(async () => {
    const trimmed = inputText.trim();

    if (trimmed) {
      try {
        const { data } = await getKeyword(inputText);
        setKeywordData(data.result);
      } catch (error) {
        console.error('Something went wrong');
      }
    } else {
      setKeywordData([]);
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(timer);
  }, [inputText]);

  return { keywordData, isLoading };
};

export default useFetchKeyword;
