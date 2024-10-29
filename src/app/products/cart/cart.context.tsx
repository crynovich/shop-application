import { createContext } from 'react';
import { ICartItem } from './cart.models';
import { Product } from '../products.models';

interface CartContextProps {
  readonly cartItems: ICartItem[];
  isInCart: (productId: number) => boolean;
  addProduct: (product: Product) => void;
  deleteProduct: (productId: number) => void;
  changeQuantity: (productId: number, quantity: number) => void;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  isInCart: () => false,
  addProduct: () => null,
  deleteProduct: () => null,
  changeQuantity: () => null,
});
