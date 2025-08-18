'use client';
import { type FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/theme/theme';

import type { RootThemeWrapProps } from './types';

const RootThemeWrap: FC<RootThemeWrapProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default RootThemeWrap;
