import { render } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  test('Should render', () => {
    const { getByTestId } = render(<IconButton>icon</IconButton>);

    expect(getByTestId('icon-button')).toBeInTheDocument();
  });
});
