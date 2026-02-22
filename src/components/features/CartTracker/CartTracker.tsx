'use client';

import { type FC } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Cart } from '@/components/ui/Cart';
import { fetchGetCart } from '@/fetch-requests';

import type { CartTrackerProps } from './types';

const CartTracker: FC<CartTrackerProps> = ({}) => {
  const { data } = useQuery({ queryKey: ['cartList'], queryFn: fetchGetCart });

  return <Cart totalItems={data ? data.data.length : 0} />;
};

export default CartTracker;
