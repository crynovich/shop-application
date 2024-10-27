import { productsService } from '../products.service';
import { useParams } from 'react-router-dom';
import { ProductDetailsHeader } from './product-details-header';
import { useGetData } from '../../shared/hooks/useGetData';
import { Loading } from '../../shared/components/loading';

export function ProductDetails() {
  const { productId } = useParams();

  const { data, loading } = useGetData(
    productsService.getProduct,
    Number(productId)
  );

  if (loading) return <Loading />;

  return (
    <>
      <ProductDetailsHeader id={data.id} name={data.name} price={data.price} />
      <div>product details</div>
    </>
  );
}
