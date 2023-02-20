import { render, waitFor } from '@testing-library/react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ThemeProvider } from './providers/theme';

describe('App', () => {
  test('Render', async () => {
    const portalElement = document.createElement('div');
    portalElement.id = 'portal';
    portalElement.setAttribute('data-testid', 'portal');
    document.getElementsByTagName('body')[0].appendChild(portalElement);

    const { getByTestId } = render(
      <Suspense fallback="">
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Suspense>,
    );

    await waitFor(() => {
      expect(getByTestId('portal')).toBeInTheDocument();
    });
  });
});
