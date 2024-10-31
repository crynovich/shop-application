import {
  Card,
  CardContent,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import { Product } from '../../shared/data-access/products.models';
import { EURO_SYMBOL } from '../../../shared/data-access/constants';

interface ProductListItemProps {
  product: Product;
  inCart?: boolean;
  onProductClick?: (productId: number) => void;
  onAddToCartClick?: (product: Product) => void;
}

export function ProductListItem({
  product,
  inCart,
  onProductClick,
  onAddToCartClick,
}: ProductListItemProps) {
  const handleProductClick = (productId: number) => {
    if (onProductClick) onProductClick(productId);
  };

  const handleAddToCartClick = (product: Product) => () => {
    if (onAddToCartClick) onAddToCartClick(product);
  };

  return (
    <Card variant="outlined" className="h-44">
      <CardContent className="h-full">
        <Stack
          className="h-full"
          direction="column"
          justifyContent="space-between"
          gap={1}
        >
          <Stack direction="column" gap={1}>
            <Link
              component="button"
              onClick={() => handleProductClick(product.id)}
              underline="hover"
            >
              <Typography className="flex-none truncate" variant="h6">
                {product.name}
              </Typography>
            </Link>
            <Typography
              className="flex-auto line-clamp-2"
              variant="body2"
              // todo: fix inline overrides
              sx={{ color: 'text.secondary' }}
            >
              {product.description}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="flex-none"
          >
            <Typography className="truncate" variant="h6">
              {product.price}
              {EURO_SYMBOL}
            </Typography>

            {!inCart ? (
              <IconButton
                onClick={handleAddToCartClick(product)}
                className="flex-none"
                size="large"
                color="secondary"
              >
                <AddShoppingCartIcon />
              </IconButton>
            ) : (
              // todo: add animation on enter
              <Stack
                justifyContent="center"
                alignItems="center"
                className="h-12 w-12"
              >
                <CheckIcon color="secondary" />
              </Stack>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
