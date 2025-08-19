import type { PizzaSpecialty, PizzaSizes } from '@/data/pizzaMenu';

export type CartItem = {
  id: number;
  pizzaId: number;
  size: PizzaSizes;
};

export type CartPizza = Omit<CartItem, 'pizzaId'> & {
  pizza: PizzaSpecialty | undefined;
  unitCost: number | undefined;
};

export type CartResponse = {
  data: CartPizza[];
};
