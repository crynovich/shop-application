import { ReactNode, useEffect, useState } from 'react';
import { Cart, ICartItem } from './cart.models';
import { CartContext } from './cart.context';
import { Product } from '../products.models';
import { cartStorage } from './cart-storage';

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart>(cartStorage.getCart() ?? {});

  useEffect(() => {
    cartStorage.setCart(cart);
  }, [cart]);

  // todo: figure out what's wrong with this
  const cartItems: ICartItem[] = Object.values(cart);

  // todo: useCallback on everything
  const isInCart = (productId: number) => {
    return !!cart[productId];
  };

  const addProduct = (product: Product) => {
    if (isInCart(product.id)) return;

    setCart((cart) => ({
      ...cart,
      [product.id]: {
        productId: product.id,
        productName: product.name,
        price: product.price,
        quantity: 1,
      },
    }));
  };

  const deleteProduct = (productId: number) => {
    setCart((cart) => {
      const { [productId]: _, ...remainingCart } = cart;
      return remainingCart;
    });
  };

  const changeQuantity = (productId: number, quantity: number) => {
    setCart((cart) => ({
      ...cart,
      [productId]: { ...cart[productId], quantity },
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isInCart,
        addProduct,
        deleteProduct,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
