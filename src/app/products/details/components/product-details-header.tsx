import {
  Button,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../shared/data-access/products.models';
import { CartContext } from '../../cart/context/cart.context';
import { EURO_SYMBOL } from '../../../shared/data-access/constants';
import CheckIcon from '@mui/icons-material/Check';

interface ProductDetailsHeaderProps {
  product: IProduct;
}

export const ProductDetailsHeader = ({
  product,
}: ProductDetailsHeaderProps) => {
  const { isInCart, addProduct } = useContext(CartContext);
  const theme = useTheme();
  const isMediumScreenUp = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleAddToCartClick = (product: IProduct) => () => {
    addProduct(product);
  };

  return (
    <Stack direction="column" gap={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap={3}>
          <Button variant="outlined" onClick={handleBackClick}>
            <ArrowBackIcon />
            {isMediumScreenUp && 'Back'}
          </Button>

          <Typography variant="h5">
            {product.name} | {product.price}
            {EURO_SYMBOL}
          </Typography>
        </Stack>

        <Button
          variant="outlined"
          color="secondary"
          onClick={handleAddToCartClick(product)}
          disabled={isInCart(product.id)}
        >
          {isInCart(product.id) ? <CheckIcon /> : <AddShoppingCartIcon />}

          {isMediumScreenUp && (isInCart(product.id) ? 'Added' : 'Add to cart')}
        </Button>
      </Stack>

      <Divider />
    </Stack>
  );
};
