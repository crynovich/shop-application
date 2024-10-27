export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  specifications: Specifications;
  additionalInformation: AdditionalInformation;
}

interface AdditionalInformation {
  Warranty: string;
  'In the Box': string[];
}

interface Specifications {
  [key: string]: number | string | string[];
}
