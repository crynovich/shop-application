import { productsService } from '../products.service';
import { useParams } from 'react-router-dom';
import { ProductDetailsHeader } from './product-details-header';
import { useGetData } from '../../shared/hooks/useGetData';
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

export const ProductDetailsContent = ({ productId }: { productId: number }) => {
  const { data, loading } = useGetData(productsService.getProduct, productId);

  if (loading) return <Loading />;

  console.log({ data });

  return (
    <>
      <ProductDetailsHeader id={data.id} name={data.name} price={data.price} />
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
