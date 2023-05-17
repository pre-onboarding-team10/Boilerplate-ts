import ItemButton from '../base/ItemButton';
import { FaPlusCircle } from 'react-icons/fa';

const AddButton = () => {
  return (
    <ItemButton className="input-submit" type="submit">
      <FaPlusCircle className="btn-plus" data-testid="plus-circle" />
    </ItemButton>
  );
};

export default AddButton;
