import { FaTrash } from 'react-icons/fa';

type DeleteButtonProps = {
  handleClick: () => void;
};

const DeleteButton = ({ handleClick }: DeleteButtonProps) => {
  return (
    <button onClick={() => handleClick()}>
      <FaTrash className="btn-trash" />
    </button>
  );
};

export default DeleteButton;
