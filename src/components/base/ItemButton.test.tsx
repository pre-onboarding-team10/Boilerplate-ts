import { render, fireEvent } from '@testing-library/react';
import ItemButton from './ItemButton';
import '@testing-library/jest-dom';

describe('ItemButton', () => {
  it('renders children', () => {
    const { getByText } = render(<ItemButton>Click me</ItemButton>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls handleClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <ItemButton handleClick={handleClick}>Click me</ItemButton>
    );
    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies className and type props', () => {
    const { getByRole } = render(
      <ItemButton className="my-class" type="submit">
        Click me
      </ItemButton>
    );
    const button = getByRole('button');
    expect(button).toHaveClass('my-class');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
