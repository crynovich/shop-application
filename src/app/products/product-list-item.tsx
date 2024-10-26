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

interface ProductListItemProps {
  product: Product;
}

export function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Card variant="outlined">
      <CardContent className="h-full">
        <Stack
          className="h-full"
          direction="column"
          justifyContent="space-between"
          gap={1}
        >
          <Stack direction="column" gap={1}>
            <Link href="/" underline="hover">
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

            <IconButton className="flex-none" size="large" color="secondary">
              <AddShoppingCartIcon />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
