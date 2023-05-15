import { useEffect, useState } from 'react';
import { SearchResultType } from '../types/types';
import { getKeyword } from '../api/search';

type KeywordReturnType = {
  keywordData: SearchResultType;
};

const useFetchKeyword = ({
  inputText,
}: {
  inputText: string;
}): KeywordReturnType => {
  const [keywordData, setKeywordData] = useState<SearchResultType>([]);

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, [inputText]);

  return { keywordData };
};

export default useFetchKeyword;
