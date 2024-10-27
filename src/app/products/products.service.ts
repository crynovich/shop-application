import { Product } from './products.models';

export const productsService = {
  getProducts: (): Promise<Product[]> => {
    return fetch(
      'https://61898893be95487994abc2d8b4cf839e.api.mockbin.io/'
    ).then((response) => response.json());
  },

  // mocked implementation since the GET/{id} endpoint doesn't exist
  getProduct: async (id: number): Promise<Product> => {
    const allProducts = await productsService.getProducts();
    const product = allProducts.find((v) => v.id === id);

    // can happen in a regular application, but in this one it won't get handled
    if (!product) throw new Error("product doesn't exist");

    return product;
  },
};
