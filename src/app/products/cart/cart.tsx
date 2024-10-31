import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { CartContext } from './context/cart.context';
import { CartItem } from './components/cart-item';
import { EURO_SYMBOL } from '../../shared/data-access/constants';

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

  const totalPrice = cartItems
    .reduce((acc, current) => current.price * current.quantity + acc, 0)
    .toFixed(2);

  const handleCloseCartClick = () => {
    if (onCloseCartClick) onCloseCartClick();
  };

  const handleDeleteProductFromCart = (productId: number) => {
    deleteProduct(productId);
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    changeQuantity(productId, quantity);
  };

  const handleCheckoutClick = () => {
    console.log({ cartItems, totalPrice });
  };

  return (
    <Stack
      className="p-4 h-full gap-6 overflow-hidden"
      direction="column"
      justifyContent="space-between"
    >
      <Stack direction="column" gap={2} className="h-full overflow-hidden">
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

        <Stack direction="column" gap={2} className="overflow-auto">
          {cartItems.map((product) => (
            <Box key={product.productId} className="flex-none">
              <CartItem
                product={product}
                onDeleteProductFromCart={handleDeleteProductFromCart}
                onQuantityChange={handleQuantityChange}
              />
            </Box>
          ))}
        </Stack>
      </Stack>

      <Stack direction="column" gap={2}>
        <Stack direction="row-reverse" justifyContent="space-between">
          <Typography variant="h6">{`Total: ${totalPrice}${EURO_SYMBOL}`}</Typography>
        </Stack>
        <Stack direction="row-reverse" gap={2}>
          <Button
            onClick={handleCheckoutClick}
            size="large"
            variant="contained"
          >
            Checkout
          </Button>
          <Button onClick={handleCloseCartClick}>Continue Shopping</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
