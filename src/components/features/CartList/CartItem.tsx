'use client';

import { type FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import type { CartItemProps } from './types';

const CartItem: FC<CartItemProps> = ({ id, name, price, size }) => {
  return (
    <Stack component="li" direction="row" width="100%">
      <Typography variant="h2" component="h2">
        Cart list
      </Typography>
    </Stack>
  );
};

export default CartItem;
