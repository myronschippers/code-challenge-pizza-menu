'use client';

import { useState, type FC, type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';

import { Cart } from '@/components/ui/Cart';

import BarTitle from './BarTitle';
import { PAGES_NAV } from './constants';
import type { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({}) => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavTo = (pgRoute: string) => () => {
    router.push(pgRoute);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BarTitle hideXs />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {PAGES_NAV.map((page) => (
                <MenuItem key={page.text} onClick={handleNavTo(page.path)}>
                  <Typography sx={{ textAlign: 'center' }}>
                    {page.text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <BarTitle hideMd />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {PAGES_NAV.map((page) => (
              <Button
                key={page.text}
                onClick={handleNavTo(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Order Cart">
              <Cart totalItems={2} />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
