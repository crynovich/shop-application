export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  specifications: IProductInformation;
  additionalInformation: IProductInformation;
}

export interface IProductInformation {
  [key: string]: number | string | string[];
}
