import { Product } from './products.models';

interface ProductsProps {
  products: Product[];
}

export function Products({ products }: ProductsProps) {
  return products.map((product) => <div key={product.id}>{product.name}</div>);
}
