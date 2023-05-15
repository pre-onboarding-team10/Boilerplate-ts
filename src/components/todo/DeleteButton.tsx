import { FaTrash } from 'react-icons/fa';

type Props = {
  handleClick?: () => void;
};

const DeleteButton = ({ handleClick }: Props) => {
  return (
    <button onClick={() => handleClick!()}>
      <FaTrash className="btn-trash" />
    </button>
  );
};

export default DeleteButton;
