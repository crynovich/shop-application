import { createContext } from 'react';
import { ProductInCart } from './cart.models';

interface CartContextProps {
  readonly productsInCart: ProductInCart[];
  isInCart: (productId: number) => boolean;
  addProduct: (productId: number) => void;
  deleteProduct: (productId: number) => void;
  changeQuantity: (productId: number, quantity: number) => void;
}

export const CartContext = createContext<CartContextProps>({
  productsInCart: [],
  isInCart: () => false,
  addProduct: () => null,
  deleteProduct: () => null,
  changeQuantity: () => null,
});
