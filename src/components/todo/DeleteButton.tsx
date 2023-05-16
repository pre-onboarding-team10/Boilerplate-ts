import { FaTrash } from 'react-icons/fa';

type DeleteButtonProps = {
  handleDelete: () => void;
};

const DeleteButton = ({ handleDelete }: DeleteButtonProps) => {
  return (
    <button onClick={handleDelete}>
      <FaTrash className="btn-trash" />
    </button>
  );
};

export default DeleteButton;
