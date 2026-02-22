import type { PizzaSizes } from '@/data';

export type CartListProps = {};

export type CartItemProps = {
  name: string;
  price: string;
  id: number;
  size: PizzaSizes;
};
