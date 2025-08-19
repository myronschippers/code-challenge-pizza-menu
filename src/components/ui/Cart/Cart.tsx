'use client';

import { type FC } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton, Badge } from '@mui/material';
import type { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import type { CartProps } from './types';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 8,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
    fontWeight: 600,
  },
}));

const Cart: FC<CartProps> = ({ totalItems = 0 }) => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={totalItems} color="secondary">
        <ShoppingCartOutlinedIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default Cart;
