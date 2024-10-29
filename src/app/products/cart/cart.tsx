import { Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useCallback, useContext } from 'react';
import { CartItem } from './cart-item';
import { CartContext } from './cart.context';
import { EURO_SYMBOL } from '../../shared/models/constants';

export interface ICartProduct {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}

export const Cart = ({
  onCloseCartClick,
}: {
  onCloseCartClick?: () => void;
}) => {
  const { cartItems, deleteProduct, changeQuantity } = useContext(CartContext);

  const handleCloseCartClick = useCallback(() => {
    if (onCloseCartClick) onCloseCartClick();
  }, [onCloseCartClick]);

  const handleDeleteProductFromCart = (productId: number) => {
    deleteProduct(productId);
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    changeQuantity(productId, quantity);
  };

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
            <Typography variant="h6">{`Your Cart (${cartItems.length})`}</Typography>
          </Stack>

          <IconButton onClick={handleCloseCartClick}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Divider />

        {/* todo: make this area scrollable */}
        <Stack direction="column" gap={2}>
          {cartItems.map((product) => (
            <CartItem
              key={product.productId}
              product={product}
              onDeleteProductFromCart={handleDeleteProductFromCart}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </Stack>
      </Stack>

      <Stack direction="column" gap={2}>
        <Stack direction="row-reverse" justifyContent="space-between">
          {/* todo: move this calculation out */}
          <Typography variant="h6">{`Total: ${cartItems
            .map((cp) => cp.price)
            .reduce((v, acc) => v + acc, 0)}${EURO_SYMBOL}`}</Typography>
        </Stack>
        <Stack direction="row-reverse" gap={2}>
          <Button size="large" variant="contained">
            Checkout
          </Button>
          <Button onClick={handleCloseCartClick}>Continue Shopping</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
