export interface ICart {
  [productId: number]: ICartItem;
}

export interface ICartItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}
