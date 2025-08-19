'use client';

import { type FC } from 'react';
import { Box, Typography } from '@mui/material';

import type { FooterProps } from './types';

const Footer: FC<FooterProps> = ({}) => {
  return (
    <Box>
      <Typography variant="h2" component="h2">
        Footer
      </Typography>
    </Box>
  );
};

export default Footer;
