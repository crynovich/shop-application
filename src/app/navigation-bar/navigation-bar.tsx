import {
  AppBar,
  Badge,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../products/cart/context/cart.context';
import { Cart } from '../products/cart/cart';

export function NavigationBar() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsDrawerOpen(newOpen);
  };

  const handleAppClick = () => {
    navigate('/');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Stack
            className="w-full"
            direction="row"
            justifyContent="space-between"
          >
            <Button color="inherit" onClick={handleAppClick}>
              Shop Application
            </Button>

            <IconButton
              size="large"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: { xs: '100%', sm: '36rem' } },
        }}
      >
        <Cart onCloseCartClick={toggleDrawer(false)} />
      </Drawer>
    </>
  );
}
