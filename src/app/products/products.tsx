import { ProductListItem } from './product-list-item';
import Grid from '@mui/material/Grid2';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetData } from '../shared/hooks/useGetData';
import { productsService } from './products.service';
import { Loading } from '../shared/components/loading';

export const Products = () => {
  const { data: products, loading } = useGetData(productsService.getProducts);
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

  if (loading) return <Loading />;

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
};
