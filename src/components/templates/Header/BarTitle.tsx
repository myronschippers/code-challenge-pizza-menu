import { type FC } from 'react';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { Stack, Typography } from '@mui/material';

import type { BarTitleProps } from './types';

const BarTitle: FC<BarTitleProps> = ({ hideMd = false, hideXs = false }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        display: { xs: hideXs ? 'none' : 'flex', md: hideMd ? 'none' : 'flex' },
      }}
    >
      <LocalPizzaIcon sx={{ mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          flexGrow: hideXs ? undefined : 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        PIZZA PALACE
      </Typography>
    </Stack>
  );
};

export default BarTitle;
