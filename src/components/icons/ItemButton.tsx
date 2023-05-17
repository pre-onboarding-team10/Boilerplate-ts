import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  handleClick?: () => void;
  className?: string;
  type?: 'button';
};

const ItemButton = ({
  icon,
  handleClick,
  className,
  type = 'button',
}: Props) => {
  return (
    <button className={className} type={type} onClick={handleClick}>
      {icon}
    </button>
  );
};

export default ItemButton;
