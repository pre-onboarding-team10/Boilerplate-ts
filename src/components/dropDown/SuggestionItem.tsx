type SuggestionItemProps = {
  suggestion: string;
  selected: boolean;
  onClick: () => void;
  debouncedInputText: string;
};

const SuggestionItem = ({
  suggestion,
  selected,
  onClick,
  debouncedInputText,
}: SuggestionItemProps) => {
  const lowerCasedSuggestion = suggestion.toLowerCase();
  const lowerCasedInputText = debouncedInputText.toLowerCase();

  const matchIndex = lowerCasedSuggestion.indexOf(lowerCasedInputText);

  if (matchIndex !== -1) {
    const prefix = suggestion.substring(0, matchIndex);
    const match = suggestion.substring(
      matchIndex,
      matchIndex + debouncedInputText.length
    );
    const suffix = suggestion.substring(matchIndex + debouncedInputText.length);

    return (
      <div
        className={`suggestion-item${selected ? ' clicked' : ''}`}
        onClick={onClick}
      >
        {prefix}
        <span className="highlighted">{match}</span>
        {suffix}
      </div>
    );
  }

  return (
    <div
      className={`suggestion-item${selected ? ' clicked' : ''}`}
      onClick={onClick}
    >
      {suggestion}
    </div>
  );
};

export default SuggestionItem;
