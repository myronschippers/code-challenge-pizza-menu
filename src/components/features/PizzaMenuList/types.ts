import type { PizzaSpecialty } from '@/data';

export type PizzaMenuListProps = {};

export type PizzaItemProps = Omit<PizzaSpecialty, 'id'> & {
  pizzaId: number;
};
