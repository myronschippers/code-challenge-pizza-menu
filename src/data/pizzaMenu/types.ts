export type PizzaSizePricing = {
  small: number;
  medium: number;
  large: number;
};

export type PizzaSpecialty = {
  id: number;
  name: string;
  description: string;
  toppings: string[];
  sizes: PizzaSizePricing;
};
