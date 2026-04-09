import { IProduct } from './products.models';

const API_URL = import.meta.env.VITE_API_URL;
// await fetch('https://61898893be95487994abc2d8b4cf839e.api.mockbin.io/')

export const productsService = {
  getProducts: async (): Promise<IProduct[]> => {
    return (await fetch(`${API_URL}/products`)).json();
  },

  // mocked implementation since the GET/{id} endpoint doesn't exist
  getProduct: async (id: number): Promise<IProduct> => {
    const allProducts = await productsService.getProducts();
    const product = allProducts.find((v) => v.id === id);

    // can happen in a regular application, but in this one it won't get handled
    if (!product) throw new Error("product doesn't exist");

    return product;
  },
};
