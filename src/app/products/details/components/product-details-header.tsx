import { Button, Divider, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../shared/data-access/products.models';
import { CartContext } from '../../cart/context/cart.context';
import { EURO_SYMBOL } from '../../../shared/data-access/constants';

interface ProductDetailsHeaderProps {
  product: Product;
}

export const ProductDetailsHeader = ({
  product,
}: ProductDetailsHeaderProps) => {
  const { isInCart, addProduct } = useContext(CartContext);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleAddToCartClick = (product: Product) => () => {
    addProduct(product);
  };

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
          onClick={handleAddToCartClick(product)}
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
