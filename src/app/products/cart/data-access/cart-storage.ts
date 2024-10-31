import { ICart } from './cart.models';

const LOCAL_STORAGE_KEY = 'cart';

/**
 * Used for client side persistance of the cart
 */
export const cartStorage = {
  getCart: (): ICart | null => {
    const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : null;
  },

  setCart: (cart: ICart): void => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  },
};
