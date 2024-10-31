import { Route, Routes } from 'react-router-dom';
import { Products } from '../products/list/products';
import { ProductDetails } from '../products/details/product-details';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/:productId" element={<ProductDetails />}></Route>
    </Routes>
  );
};
