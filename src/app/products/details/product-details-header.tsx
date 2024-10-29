import { Button, Divider, Stack, Typography } from '@mui/material';
import { EURO_SYMBOL } from '../../shared/models/constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../cart/cart.context';
import { Product } from '../products.models';

interface ProductDetailsHeaderProps {
  product: Product;
}

export const ProductDetailsHeader = ({
  product,
}: ProductDetailsHeaderProps) => {
  const { isInCart, addProduct } = useContext(CartContext);

  const navigate = useNavigate();

  const handleBackClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleAddToCartClick = useCallback(
    (product: Product) => {
      addProduct(product);
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
            {product.name} | {product.price}
            {EURO_SYMBOL}
          </Typography>
        </Stack>

        {/* todo: make the buttons switch to icon buttons on smaller screens */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleAddToCartClick(product)}
          disabled={isInCart(product.id)}
        >
          <AddShoppingCartIcon />
          {!isInCart(product.id) ? 'Add to cart' : 'Added'}
        </Button>
      </Stack>

      <Divider />
    </Stack>
  );
};
