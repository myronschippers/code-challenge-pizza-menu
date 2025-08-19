'use client';

import { type FC } from 'react';
import { Box, Typography } from '@mui/material';

import type { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <Box>
      <Typography variant="h2" component="h2">
        Header
      </Typography>
    </Box>
  );
};

export default Header;
