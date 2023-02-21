import { BrowserRouter } from 'react-router-dom';

export const renderWIthRouter = (children: React.ReactNode) => (
  <BrowserRouter>{children}</BrowserRouter>
);
