import { Product } from './products.models';

export const productsService = {
  getProducts: async (): Promise<Product[]> => {
    return (
      await fetch('https://61898893be95487994abc2d8b4cf839e.api.mockbin.io/')
    ).json();
  },
};
