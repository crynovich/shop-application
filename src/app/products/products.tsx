import { Product } from './products.models';
import { ProductListItem } from './product-list-item';
import Grid from '@mui/material/Grid2';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductsProps {
  // todo: read this from the context
  products: Product[];
}

export function Products({ products }: ProductsProps) {
  const navigate = useNavigate();

  const handleProductClick = useCallback(
    (productId: number) => {
      navigate(`/${productId}`);
    },
    [navigate]
  );

  const handleAddToCartClick = useCallback((productId: number) => {
    // navigate(productId);
  }, []);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} size={{ sm: 6, md: 4, lg: 3 }}>
          <ProductListItem
            product={product}
            onProductClick={handleProductClick}
            onAddToCartClick={handleAddToCartClick}
          />
        </Grid>
      ))}
    </Grid>
  );
}
