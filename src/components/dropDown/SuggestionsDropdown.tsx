import React, { useState, useEffect } from 'react';
import apiRequest from '../../api/index';
import SuggestionItem from './SuggestionItem';
import { FaSpinner } from 'react-icons/fa';
import { handleCreateTodos } from '../../utils/todos';
import { SetStateType, TodoDataType } from '../../types/types';
import './dropDown.css';

type SuggestionsDropdownProps = {
  suggestions: string[];
  debouncedInputText: string;
  setSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
  setTodos: SetStateType<TodoDataType[]>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

const SuggestionsDropdown = ({
  suggestions,
  debouncedInputText,
  setSuggestions,
  setTodos,
  setInputText,
}: SuggestionsDropdownProps) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const [currentPage, setCurrentPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);

  const limit = 10;

  const handleSuggestionClick = (suggestion: string) => {
    setSelectedSuggestion(suggestion);
    setInputText('');
    handleCreateTodos(suggestion, setTodos);
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    if (debouncedInputText) {
      setIsDropdownVisible(true);
    }
  }, [debouncedInputText]);

  const loadMoreSuggestions = async () => {
    setIsLoading(true);

    try {
      const response = await apiRequest.get('/search', {
        params: {
          q: debouncedInputText,
          page: currentPage,
          limit: limit,
        },
      });

      const newSuggestions = (response.data as { result: string[] }).result;
      setSuggestions(prevSuggestions => [
        ...prevSuggestions,
        ...newSuggestions,
      ]);
      setCurrentPage(prevPage => prevPage + 1);
    } catch (error) {
      throw new Error('Error loading data: ');
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && !isLoading) {
      loadMoreSuggestions();
    }
  };

  return (
    <>
      {isDropdownVisible && (
        <div className="suggestion-dropdown" onScroll={handleScroll}>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem
              key={index}
              suggestion={suggestion}
              debouncedInputText={debouncedInputText}
              selected={suggestion === selectedSuggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            />
          ))}

          {isLoading && (
            <FaSpinner className="spinner" style={{ margin: '0 auto' }} />
          )}
        </div>
      )}
    </>
  );
};

export default SuggestionsDropdown;
