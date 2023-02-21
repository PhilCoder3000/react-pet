import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { IconButton } from './IconButton';

const testId = 'icon-button';

describe('IconButton', () => {
  test('Render', () => {
    const { getByTestId } = render(<IconButton />);

    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByTestId(testId)).toBeEmptyDOMElement();
    expect(getByTestId(testId)).toBeEnabled();
  });

  test('Add class', () => {
    const { getByTestId } = render(<IconButton className="class" />);

    expect(getByTestId(testId)).toHaveClass('class');
  });

  test('Add value', () => {
    const { getByTestId } = render(<IconButton>value</IconButton>);

    expect(getByTestId(testId)).toHaveTextContent('value');
  });

  test('Add inner element', () => {
    const { getByTestId } = render(
      <IconButton>
        <span data-testid="children">span</span>
      </IconButton>,
    );
    const children = getByTestId('children');

    expect(getByTestId(testId)).toContainElement(children);
  });

  test('Disabled', () => {
    const { getByTestId } = render(<IconButton disabled />);

    expect(getByTestId(testId)).toBeDisabled();
  });

  test('Snapshot primary', () => {
    const snapshot = renderer.create(<IconButton color="primary" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test('Snapshot secondary', () => {
    const snapshot = renderer.create(<IconButton color="secondary" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
