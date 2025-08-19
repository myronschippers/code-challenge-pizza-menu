'use client';

import { useState, type FC } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import type { QueryProviderProps } from './types';

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
