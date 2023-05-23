import { ImSpinner8 } from 'react-icons/im';

const Spinner = ({ className }: { className?: string }) => {
  return (
    <ImSpinner8 className={`spinner ${className}`} data-testid="spinner-icon" />
  );
};

export default Spinner;
