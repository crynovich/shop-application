import { Stack } from '@mui/material';
import { Product } from './products.models';
import { ProductListItem } from './product-list-item';
import Grid from '@mui/material/Grid2';

interface ProductsProps {
  products: Product[];
}

export function Products({ products }: ProductsProps) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid size={{ sm: 6, md: 4, lg: 3 }}>
          <ProductListItem key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
