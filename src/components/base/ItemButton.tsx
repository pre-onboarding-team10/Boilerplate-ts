import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  handleClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
};

const ItemButton = ({
  children,
  handleClick,
  className,
  type = 'button',
}: Props) => {
  return (
    <button className={className} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default ItemButton;
