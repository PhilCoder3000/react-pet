import { Suspense } from 'react';

export const renderWithSuspense = (children: React.ReactNode) => (
  <Suspense>
    {children}
  </Suspense>
)