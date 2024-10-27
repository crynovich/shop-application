import { productsService } from '../products.service';
import { useParams } from 'react-router-dom';
import { ProductDetailsHeader } from './product-details-header';
import { useGetData } from '../../shared/hooks/useGetData';
import { Loading } from '../../shared/components/loading';

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

  return (
    <>
      <ProductDetailsHeader id={data.id} name={data.name} price={data.price} />
      <div>product details</div>
    </>
  );
};
