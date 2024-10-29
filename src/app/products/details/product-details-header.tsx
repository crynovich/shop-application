import { Button, Divider, Stack, Typography } from '@mui/material';
import { EURO_SYMBOL } from '../../shared/models/constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../cart/cart.context';

interface ProductDetailsHeaderProps {
  id: number;
  name: string;
  price: number;
}

export const ProductDetailsHeader = ({
  id,
  name,
  price,
}: ProductDetailsHeaderProps) => {
  const { isInCart, addProduct } = useContext(CartContext);

  const navigate = useNavigate();

  const handleBackClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleAddToCartClick = useCallback(
    (productId: number) => {
      addProduct(productId);
    },
    [addProduct]
  );

  return (
    <Stack direction="column" gap={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap={3}>
          <Button variant="outlined" onClick={handleBackClick}>
            <ArrowBackIcon />
            Back
          </Button>

          <Typography variant="h5">
            {name} | {price}
            {EURO_SYMBOL}
          </Typography>
        </Stack>

        {/* todo: make the buttons switch to icon buttons on smaller screens */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleAddToCartClick(id)}
          disabled={isInCart(id)}
        >
          <AddShoppingCartIcon />
          {!isInCart(id) ? 'Add to cart' : 'Added'}
        </Button>
      </Stack>

      <Divider />
    </Stack>
  );
};
