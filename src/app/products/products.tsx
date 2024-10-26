import { Stack } from '@mui/material';
import { Product } from './products.models';
import { ProductListItem } from './product-list-item';

interface ProductsProps {
  products: Product[];
}

export function Products({ products }: ProductsProps) {
  return (
    <Stack gap={2}>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </Stack>
  );
}
