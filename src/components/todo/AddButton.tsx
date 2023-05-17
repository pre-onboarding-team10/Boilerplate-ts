import ItemButton from '../base/ItemButton';
import { FaPlusCircle } from 'react-icons/fa';

const AddButton = () => {
  return (
    <ItemButton
      icon={<FaPlusCircle className="btn-plus" />}
      className="input-submit"
      type="submit"
    />
  );
};

export default AddButton;
