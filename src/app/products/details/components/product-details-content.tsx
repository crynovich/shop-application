import { useGetData } from '../../../shared/hooks/use-get-data.hook';
import { productsService } from '../../shared/data-access/products.service';
import { Loading } from '../../../shared/components/loading';
import { ProductDetailsHeader } from './product-details-header';
import Grid from '@mui/material/Grid2';
import { Stack, Typography } from '@mui/material';
import { ProductDetailsCard } from './product-details-card';
import { ProductFeatures } from './product-features';
import { GeneralInformation } from './general-information';

interface ProductDetailsProps {
  productId: number;
}

export const ProductDetailsContent = ({ productId }: ProductDetailsProps) => {
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
              <Typography>{product.description}</Typography>
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
