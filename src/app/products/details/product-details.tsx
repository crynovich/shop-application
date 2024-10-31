import { useParams } from 'react-router-dom';
import { ProductDetailsContent } from './components/product-details-content';

export const ProductDetails = () => {
  const { productId } = useParams();
  return productId && +productId ? (
    <ProductDetailsContent productId={+productId} />
  ) : (
    <div> Unexpected error </div>
  );
};
