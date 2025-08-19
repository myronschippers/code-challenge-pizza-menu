import { type FC } from 'react';
import { Box, Grid } from '@mui/material';

import { Header } from '@/components/templates/Header';
import { Footer } from '@/components/templates/Footer';

import type { SandwichStackProps } from './types';

const SandwichStack: FC<SandwichStackProps> = ({ children }) => {
  return (
    <Grid container spacing={2} direction="column" wrap="nowrap" height="100%">
      <Grid component="header" size={12}>
        <Header />
      </Grid>
      <Grid component="main" size={12} flexGrow={1}>
        <Box px={{ xs: 2, md: 4 }} py={2}>
          {children}
        </Box>
      </Grid>
      <Grid component="footer" size={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default SandwichStack;
