import { Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useCallback } from 'react';
import { CartItem } from './cart-item';

export const Cart = ({
  onCloseCartClick,
}: {
  onCloseCartClick?: () => void;
}) => {
  const handleCloseCartClick = useCallback(() => {
    if (onCloseCartClick) onCloseCartClick();
  }, [onCloseCartClick]);

  return (
    <Stack
      className="p-4 h-full"
      direction="column"
      justifyContent="space-between"
    >
      <Stack direction="column" gap={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" gap={1}>
            <ShoppingCartIcon color="primary" />
            <Typography variant="h6">Your Cart (3)</Typography>
          </Stack>

          <IconButton onClick={handleCloseCartClick}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Divider />

        {/* todo: make this area scrollable */}
        <Stack direction="column" gap={2}>
          <CartItem />
          <CartItem />
          <CartItem />
        </Stack>
      </Stack>

      <Stack direction="column" gap={2}>
        <Stack direction="row-reverse" justifyContent="space-between">
          <Typography variant="h6">Total: 149$</Typography>
        </Stack>
        <Stack direction="row-reverse" gap={2}>
          <Button size="large" variant="contained">
            Checkout
          </Button>
          <Button>Continue Shopping</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
