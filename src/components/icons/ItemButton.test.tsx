import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemButton from './ItemButton';

describe('ItemButton', () => {
  it('renders the icon', () => {
    const { getByTestId } = render(
      <ItemButton icon={<div data-testid="icon" />} />
    );
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('calls handleClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <ItemButton icon={<div />} handleClick={handleClick} />
    );
    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies the className prop', () => {
    const { getByRole } = render(
      <ItemButton icon={undefined} className="test-class" />
    );
    expect(getByRole('button')).toHaveClass('test-class');
  });

  it('defaults to type "button"', () => {
    const { getByRole } = render(<ItemButton icon={<div />} />);
    expect(getByRole('button')).toHaveAttribute('type', 'button');
  });
});
