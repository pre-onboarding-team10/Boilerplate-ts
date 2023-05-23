import { FaTrash } from 'react-icons/fa';

const RemoveButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button type="button" onClick={handleClick}>
      <FaTrash className="btn-trash" data-testid="trash-icon" />
    </button>
  );
};

export default RemoveButton;
