import {
  Card,
  CardContent,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { Product } from './products.models';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCallback } from 'react';

interface ProductListItemProps {
  product: Product;
  onProductClick?: (productId: number) => void;
  onAddToCartClick?: (productId: number) => void;
}

export function ProductListItem({
  product,
  onProductClick,
  onAddToCartClick,
}: ProductListItemProps) {
  const handleProductClick = useCallback(
    (productId: number) => {
      if (onProductClick) onProductClick(productId);
    },
    [onProductClick]
  );

  const handleAddToCartClick = useCallback(
    (productId: number) => {
      if (onAddToCartClick) onAddToCartClick(productId);
    },
    [onAddToCartClick]
  );

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
              onClick={() => handleProductClick(product.id)}
              href="javascript:void(0)"
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
            {/* hardcoded currency since the data is missing */}
            <Typography className="truncate" variant="h6">
              {product.price}€
            </Typography>

            <IconButton
              onClick={() => handleAddToCartClick(product.id)}
              className="flex-none"
              size="large"
              color="secondary"
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
