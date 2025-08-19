'use client';

import { type FC } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import type { PizzasGetResponse } from '@/data';

import PizzaItem from './PizzaItem';
import type { PizzaMenuListProps } from './types';

async function getPizzas(): Promise<PizzasGetResponse> {
  const pizzasResponse = await fetch('/api/pizzas');
  console.log('!!!API GET Pizzas:', pizzasResponse);
  return await pizzasResponse.json();
}

const PizzaMenuList: FC<PizzaMenuListProps> = ({}) => {
  const { isFetching, data } = useQuery({
    queryKey: ['pizzasList'],
    queryFn: getPizzas,
  });

  return (
    <Stack direction="column" spacing={3}>
      {isFetching && (
        <Stack direction="row" justifyContent="center">
          <CircularProgress />
        </Stack>
      )}

      {data &&
        data.data.map(({ id, ...pizzaData }) => {
          return <PizzaItem key={id} pizzaId={id} {...pizzaData} />;
        })}
    </Stack>
  );
};

export default PizzaMenuList;
