import { Card, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { EURO_SYMBOL } from '../../../shared/data-access/constants';
import { Counter } from '../../../shared/components/counter';
import { ICartItem } from '../data-access/cart.models';

interface CartItemProps {
  cartItem: ICartItem;
  onDeleteProductFromCart?: (productId: number) => void;
  onQuantityChange?: (productId: number, quantity: number) => void;
}

export const CartItem = ({
  cartItem,
  onDeleteProductFromCart,
  onQuantityChange,
}: CartItemProps) => {
  const handleDeleteProductFromCart = () => {
    if (onDeleteProductFromCart) onDeleteProductFromCart(cartItem.productId);
  };

  const handleQuantityChange = (quantity: number) => {
    if (onQuantityChange) onQuantityChange(cartItem.productId, quantity);
  };

  return (
    <Card variant="outlined" className="p-4">
      <Stack
        direction="row"
        justifyContent="space-between"
        gap={4}
        alignItems="center"
        className="w-full"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          flex="1 1 auto"
          className="overflow-hidden"
        >
          <Stack direction="column" className="overflow-hidden">
            <Typography className="truncate">{cartItem.productName}</Typography>
            <Typography variant="caption">
              {cartItem.price}
              {EURO_SYMBOL}
            </Typography>
          </Stack>
          <Counter
            quantity={cartItem.quantity}
            onChange={handleQuantityChange}
          />
        </Stack>

        <IconButton onClick={handleDeleteProductFromCart} className="flex-none">
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Card>
  );
};
