import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('renders without crashing', () => {
    render(<Spinner />);
  });

  it('renders the ImSpinner8 icon', () => {
    const { getByTestId } = render(<Spinner />);
    expect(getByTestId('spinner-icon')).toBeInTheDocument();
  });

  it('has a "spinner" class', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toHaveClass('spinner');
  });
});
