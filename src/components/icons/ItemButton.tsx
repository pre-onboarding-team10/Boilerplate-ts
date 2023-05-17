import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  handleClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
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
