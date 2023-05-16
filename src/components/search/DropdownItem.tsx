type DropdownItemProps = {
  keyword: string;
  inputText: string;
};

const DropdownItem = ({ keyword, inputText }: DropdownItemProps) => {
  const handleClick = async () => {};

  return (
    <li onClick={handleClick} className="dropdown-item ellipsis">
      {keyword}
    </li>
  );
};

export default DropdownItem;
