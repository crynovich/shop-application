import { ReactNode, useState } from 'react';
import { Cart, CartItem, ProductInCart } from './cart.models';
import { CartContext } from './cart.context';

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart>({});

  // todo: figure out what's wrong with object.entries
  const productsInCart: ProductInCart[] = Object.entries(cart).map(
    ([key, value]) => ({
      productId: +key,
      price: 12,
      quantity: (value as CartItem).quantity,
    })
  );

  // todo: useCallback on everything
  const isInCart = (productId: number) => {
    return !!cart[productId];
  };

  const addProduct = (productId: number) => {
    if (isInCart(productId)) return;

    setCart((cart) => ({ ...cart, [productId]: { quantity: 1 } }));
  };

  const removeProduct = (productId: number) => {
    setCart((cart) => {
      const { [productId]: _, ...remainingCart } = cart;
      return remainingCart;
    });
  };

  const changeQuantity = (productId: number, quantity: number) => {
    setCart((cart) => ({ ...cart, [productId]: { quantity } }));
  };

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        isInCart,
        addProduct,
        deleteProduct: removeProduct,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
