'use client';

import { type FC } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

import type { PizzaItemProps } from './types';

const PizzaItem: FC<PizzaItemProps> = ({ pizzaId, name, description }) => {
  const router = useRouter();

  const handleAddPizzaToCart = () => {
    console.log(`!!!ADD ${name} pizza (id: ${pizzaId})`);
  };

  const handleClickPizza = () => {
    router.push(`/menu/${pizzaId}`);
  };

  return (
    <Card>
      <CardActionArea onClick={handleClickPizza}>
        <Stack direction="row">
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="/pizza-detail-04.webp"
            alt={`${name}, pizza`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="p">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </CardContent>
        </Stack>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={handleAddPizzaToCart}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default PizzaItem;
