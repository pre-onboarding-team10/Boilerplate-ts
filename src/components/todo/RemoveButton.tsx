import { FaTrash } from 'react-icons/fa';
import ItemButton from '../base/ItemButton';

const RemoveButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <ItemButton handleClick={handleClick}>
      <FaTrash className="btn-trash" />
    </ItemButton>
  );
};

export default RemoveButton;
