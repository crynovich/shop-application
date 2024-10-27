import { productsService } from '../products.service';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductDetailsHeader } from './product-details-header';
import { useGetData } from '../../shared/hooks/useGetData';
import { Loading } from '../../shared/components/loading';
import Grid from '@mui/material/Grid2';
import { GeneralInformation } from './general-information';
import { Stack, Typography } from '@mui/material';
import { ProductDetailsCard } from './product-details-card';
import { ProductFeatures } from './product-features';
import { useCallback } from 'react';

export const ProductDetails = () => {
  const { productId } = useParams();
  return productId && +productId ? (
    <ProductDetailsContent productId={+productId} />
  ) : (
    <div> Unexpected error </div>
  );
};

export const ProductDetailsContent = ({ productId }: { productId: number }) => {
  const { data, loading } = useGetData(productsService.getProduct, productId);
  const navigate = useNavigate();

  const handleBackClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleAddToCartClick = useCallback((productId: number) => {
    console.log('add to cart click', productId);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <ProductDetailsHeader
        id={data.id}
        name={data.name}
        price={data.price}
        onBackClick={handleBackClick}
        onAddToCartClick={handleAddToCartClick}
      />
      <Grid container spacing={2} className="p-4">
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack direction="column" gap={2}>
            <ProductDetailsCard title="Features">
              <ProductFeatures features={data.features} />
            </ProductDetailsCard>

            <ProductDetailsCard title="Specifications">
              <GeneralInformation information={data.specifications} />
            </ProductDetailsCard>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack direction="column" gap={2}>
            <ProductDetailsCard title="Description">
              <Typography variant="body2">{data.description}</Typography>
            </ProductDetailsCard>

            <ProductDetailsCard title="Additional Information">
              <GeneralInformation information={data.additionalInformation} />
            </ProductDetailsCard>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
