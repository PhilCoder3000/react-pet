import { StoreProvider } from 'app/providers/store';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { ThemeProvider } from './app/providers/theme';
import './app/styles/index.scss';

const Root = () => (
  <StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>
);

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Root />);
}
