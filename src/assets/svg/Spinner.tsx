import { FaSpinner } from 'react-icons/fa';

const Spinner = ({ className }: { className?: string }) => {
  return <FaSpinner className={`spinner ${className}`} />;
};

export default Spinner;
