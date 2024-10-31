import Grid from '@mui/material/Grid2';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetData } from '../../shared/hooks/use-get-data.hook';
import { productsService } from '../shared/data-access/products.service';
import { CartContext } from '../cart/context/cart.context';
import { Product } from '../shared/data-access/products.models';
import { Loading } from '../../shared/components/loading';
import { ProductListItem } from './components/product-list-item';

export const Products = () => {
  const { data: products, loading } = useGetData(productsService.getProducts);
  const { isInCart, addProduct } = useContext(CartContext);

  const navigate = useNavigate();

  const handleProductClick = useCallback(
    (productId: number) => {
      navigate(`/${productId}`);
    },
    [navigate]
  );

  const handleAddToCartClick = useCallback(
    (product: Product) => {
      addProduct(product);
    },
    [addProduct]
  );

  if (loading) return <Loading />;

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} size={{ sm: 6, md: 4, lg: 3 }}>
          <ProductListItem
            product={product}
            inCart={isInCart(product.id)}
            onProductClick={handleProductClick}
            onAddToCartClick={handleAddToCartClick}
          />
        </Grid>
      ))}
    </Grid>
  );
};