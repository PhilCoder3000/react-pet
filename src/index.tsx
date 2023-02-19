import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { ThemeProvider } from './app/providers/theme';
import './app/styles/index.scss';

const Root = () => (
  <StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
  </StrictMode>
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Root />);
