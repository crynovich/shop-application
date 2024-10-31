export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  specifications: ProductInformation;
  additionalInformation: ProductInformation;
}

export interface ProductInformation {
  [key: string]: number | string | string[];
}
