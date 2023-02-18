import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './styles/index.scss';
import { ThemeProvider } from './theme/ThemeProvider';

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
