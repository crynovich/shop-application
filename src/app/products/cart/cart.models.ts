export interface CartItem {
  quantity: number;
}

export interface Cart {
  [productId: number]: CartItem;
}

export interface ProductInCart {
  productId: number;
  quantity: number;
  price: number;
}
