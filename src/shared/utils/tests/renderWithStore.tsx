import type { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

export const renderWithStore = (children: React.ReactNode, store: Store) => (
  <Provider store={store}>{children}</Provider>
);
