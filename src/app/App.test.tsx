import { render, waitFor } from '@testing-library/react';
import {
  renderWIthRouter,
  renderWithSuspense,
  renderWithThemeProvider,
} from 'shared/utils/tests';
import { App } from './App';

const renderWithWrappers = (children: React.ReactNode) =>
  renderWithSuspense(
    renderWithThemeProvider(
      renderWIthRouter(children)
    )
  );

describe('App', () => {
  test('Render', async () => {
    const portalElement = document.createElement('div');
    portalElement.id = 'portal';
    portalElement.setAttribute('data-testid', 'portal');
    document.getElementsByTagName('body')[0].appendChild(portalElement);

    const { getByTestId } = render(renderWithWrappers(<App />));

    await waitFor(() => {
      expect(getByTestId('portal')).toBeInTheDocument();
    });
  });
});
