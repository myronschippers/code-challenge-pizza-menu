export type PizzaSizes = 'small' | 'medium' | 'large';

export type PizzaSizePricing = Record<PizzaSizes, number>;

export type PizzaSpecialty = {
  id: number;
  name: string;
  description: string;
  toppings: string[];
  sizes: PizzaSizePricing;
};
