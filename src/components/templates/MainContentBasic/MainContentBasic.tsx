'use client';

import { type FC } from 'react';
import { Stack, Typography } from '@mui/material';

import type { MainContentBasicProps } from './types';

const MainContentBasic: FC<MainContentBasicProps> = ({ title, children }) => {
  return (
    <Stack direction="column" gap={2}>
      <Typography variant="h3" component="h1">
        {title}
      </Typography>

      {children}
    </Stack>
  );
};

export default MainContentBasic;
