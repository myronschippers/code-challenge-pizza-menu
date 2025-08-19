'use client';

import { type FC } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Cart } from '@/components/ui/Cart';

import type { CartTrackerProps } from './types';
import { CartResponse } from '@/data';

async function fetchGetCart(): Promise<CartResponse> {
  const response = await fetch('/api/cart');
  return response.json();
}

const CartTracker: FC<CartTrackerProps> = ({}) => {
  const { data } = useQuery({ queryKey: ['cartList'], queryFn: fetchGetCart });

  return <Cart totalItems={data ? data.data.length : 0} />;
};

export default CartTracker;
