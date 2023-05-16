import React, { useState, useEffect, useCallback } from 'react';
import { getSuggestList } from '../../api/suggest'
import { SuggestType } from '../../types/types';
import './SuggestionList.css';
import { handleCreateTodos } from '../../utils/todos';
import { ImSpinner8 } from 'react-icons/im';
import { SuggestionListProps } from '../../types/types';

const SuggestionList = ({ inputText, setInputText, setTodos } : SuggestionListProps) => {
    const [suggestions, setSuggestions] = useState<SuggestType>({
        q: "",
        page: 1,
        limit: 10,
        qty: 0,
        result: [],
        total: 0,
    })
    const [isLoading, setIsLoading] = useState(false);
    const [nowPage, setNowPage] = useState(1);
    const getSearchSuggestions = () => {
        setIsLoading(true);
        setNowPage(nowPage + 1)
        getSuggestList(inputText,nowPage)
        .then((res) => {
            const { data } = res;
            setSuggestions(data)
            console.log(data)
            
        });
        setIsLoading(false);
        
    };

    const handleSuggestionClick = useCallback(
        async (suggestion: string) => {
          await handleCreateTodos(suggestion, setTodos);
          setInputText('');
        },
        [inputText, setTodos]
      );

    useEffect(() => {
        setNowPage(1);
        if (inputText) {
            const timer = setTimeout(() => {
                getSearchSuggestions();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [inputText]);

    const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        if (scrollTop + clientHeight === scrollHeight && !isLoading) {
            getSearchSuggestions();
        }
    };

    return (
        <>
            {inputText ?
                <ul className="suggestions" onScroll={handleScroll}>
                    {suggestions.result.map((suggestion, index) => (
                        <li className='suggestion_item'
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        >
                        <div dangerouslySetInnerHTML={{ __html: suggestion.replace(new RegExp(inputText, "gi"), (match) => `<span class="highlight">${match}</span>`) }} />
                        </li>
                    ))}
                    {nowPage * 10 < Math.ceil(suggestions.total / 10) * 10 ?
                        <div className='spinner_container'>
                            {isLoading ? (
                                <div>...</div>
                            ) : (
                                <ImSpinner8 className="suggestions_spinner"/>
                            )}
                        </div>
                        :
                        null
                    }
                </ul>
                :
                null
            }
        </>
    );
};

export default SuggestionList;