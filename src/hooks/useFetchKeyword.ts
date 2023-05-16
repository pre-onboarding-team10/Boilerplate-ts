import { useEffect, useState } from 'react';

import { getKeyword } from '../api/search';
import { SearchResultType } from '../types/types';
import { makeHighlightText } from '../utils/makeHighlightText';
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
        const highlightText = makeHighlightText(data, trimmed);

        setKeywordData(highlightText);
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
  // getting data every 0.5s if 'fetchData' is in the dependency array

  return { keywordData, isLoading };
};

export default useFetchKeyword;
