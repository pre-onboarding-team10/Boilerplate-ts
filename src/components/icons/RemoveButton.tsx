import { FaTrash } from 'react-icons/fa';
import ItemButton from './ItemButton';

const RemoveButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <ItemButton
      icon={<FaTrash className="btn-trash" data-testid="trash-icon" />}
      handleClick={handleClick}
    />
  );
};

export default RemoveButton;
