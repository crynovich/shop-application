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
        <CardActionArea className="flex-auto">
          <CardContent>
            <Typography variant="h6" color="primary">
              {product.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="flex-none">
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
