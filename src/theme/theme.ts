'use client';
import { Open_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BAFF66',
    },
    secondary: {
      main: '#FF66C4',
    },
    background: {
      default: '#1b1b1b',
      paper: '#2c2c2b',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#2c2c2b',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // Remove background image from all Paper components
          // gets rid of Paper overlay default that MUI applies
          backgroundImage: 'none',
        },
      },
    },
  },
  cssVariables: true,
  typography: {
    fontFamily: openSans.style.fontFamily,
  },
});

export default theme;
