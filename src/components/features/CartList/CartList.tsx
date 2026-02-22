'use client';

import { type FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { fetchGetCart } from '@/fetch-requests';

import type { CartListProps } from './types';

const CartList: FC<CartListProps> = ({}) => {
  const { isFetching, data } = useQuery({
    queryKey: ['cartList'],
    queryFn: fetchGetCart,
  });
  return (
    <Box component="ul">
      <Typography variant="h2" component="h2">
        Cart list
      </Typography>
    </Box>
  );
};

export default CartList;
