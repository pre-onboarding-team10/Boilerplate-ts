import { FaTrash } from 'react-icons/fa';
import ItemButton from '../base/ItemButton';

const RemoveButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <ItemButton
      icon={<FaTrash className="btn-trash" />}
      handleClick={handleClick}
    />
  );
};

export default RemoveButton;
