import { productsService } from '../products.service';
import { useParams } from 'react-router-dom';
import { ProductDetailsHeader } from './product-details-header';
import { useGetData } from '../../shared/hooks/use-get-data.hook';
import { Loading } from '../../shared/components/loading';
import Grid from '@mui/material/Grid2';
import { GeneralInformation } from './general-information';
import { Stack, Typography } from '@mui/material';
import { ProductDetailsCard } from './product-details-card';
import { ProductFeatures } from './product-features';

export const ProductDetails = () => {
  const { productId } = useParams();
  return productId && +productId ? (
    <ProductDetailsContent productId={+productId} />
  ) : (
    <div> Unexpected error </div>
  );
};

// todo: consider moving this to a separate file
export const ProductDetailsContent = ({ productId }: { productId: number }) => {
  const { data: product, loading } = useGetData(
    productsService.getProduct,
    productId
  );

  if (loading) return <Loading />;

  return (
    <>
      <ProductDetailsHeader product={product} />
      <Grid container spacing={2} className="p-4">
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack direction="column" gap={2}>
            <ProductDetailsCard title="Features">
              <ProductFeatures features={product.features} />
            </ProductDetailsCard>

            <ProductDetailsCard title="Specifications">
              <GeneralInformation information={product.specifications} />
            </ProductDetailsCard>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack direction="column" gap={2}>
            <ProductDetailsCard title="Description">
              <Typography variant="body2">{product.description}</Typography>
            </ProductDetailsCard>

            <ProductDetailsCard title="Additional Information">
              <GeneralInformation information={product.additionalInformation} />
            </ProductDetailsCard>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
