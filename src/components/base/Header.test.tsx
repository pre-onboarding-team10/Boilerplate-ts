import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

describe('Header component', () => {
  test('renders header title', () => {
    render(<Header />);
    const headerTitle = screen.getByText(/Toodos/);
    expect(headerTitle).toBeInTheDocument();
  });
});
