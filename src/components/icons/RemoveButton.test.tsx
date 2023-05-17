import { render } from '@testing-library/react';
import RemoveButton from './RemoveButton';
import '@testing-library/jest-dom';

describe('RemoveButton', () => {
  it('should render the trash icon', () => {
    const { getByTestId } = render(<RemoveButton handleClick={() => {}} />);
    const trashIcon = getByTestId('trash-icon');
    expect(trashIcon).toBeInTheDocument();
  });
});
