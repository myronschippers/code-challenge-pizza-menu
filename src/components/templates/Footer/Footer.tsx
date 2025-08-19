'use client';

import { type FC } from 'react';
import { Stack, Typography } from '@mui/material';

import type { FooterProps } from './types';

const Footer: FC<FooterProps> = ({}) => {
  const currentYear = new Date().getFullYear();

  return (
    <Stack direction="row" justifyContent="center" p={3}>
      <Typography variant="caption" component="p">
        &copy; {currentYear} Pizza Place
      </Typography>
    </Stack>
  );
};

export default Footer;
