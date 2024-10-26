import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
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
      <Stack direction={'row'}>
        <CardActionArea style={{ flex: '1 1 auto' }}>
          <CardContent>
            <Typography variant="h6" color="primary">
              {product.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ flex: '0 0 auto' }}>
          <Button variant="outlined" size="small" color="primary">
            <Stack direction="row" alignItems="center" gap={1}>
              <AddShoppingCartIcon />
              Add to cart
            </Stack>
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
}
