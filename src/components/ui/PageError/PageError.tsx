'use client';

import { type FC } from 'react';
import { Alert } from '@mui/material';

import type { PageErrorProps } from './types';

const PageError: FC<PageErrorProps> = ({ children }) => {
  return (
    <Alert severity="error" sx={{ width: '100%' }}>
      {children}
    </Alert>
  );
};

export default PageError;
