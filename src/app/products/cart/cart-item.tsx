import { Card, IconButton, Stack, Typography } from '@mui/material';
import { Counter } from '../../shared/components/counter';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProductInCart } from './cart.models';

interface CartItemProps {
  product: ProductInCart;
  onDeleteProductFromCart?: (productId: number) => void;
  onQuantityChange?: (productId: number, quantity: number) => void;
}

export const CartItem = ({
  product,
  onDeleteProductFromCart,
  onQuantityChange,
}: CartItemProps) => {
  const handleDeleteProductFromCart = () => {
    if (onDeleteProductFromCart) onDeleteProductFromCart(product.productId);
  };

  const handleQuantityChange = (quantity: number) => {
    if (onQuantityChange) onQuantityChange(product.productId, quantity);
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
            <Typography className="truncate">{product.productId}</Typography>
            <Typography variant="caption">{product.price}</Typography>
          </Stack>
          <Counter
            quantity={product.quantity}
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
