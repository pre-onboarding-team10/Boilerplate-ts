import { FaPlusCircle } from 'react-icons/fa';
import styles from './AddButton.module.css';

const AddButton = () => {
  return (
    <button className={styles.input_submit} type="submit">
      <FaPlusCircle className={styles.btn_plus} />
    </button>
  );
};

export default AddButton;
