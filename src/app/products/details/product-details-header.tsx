interface ProductDetailsHeaderProps {
  id: number;
  name: string;
  price: number;
  onBackClick?: () => null;
  onAddToCartClick?: (id: number) => null;
}

export const ProductDetailsHeader = ({}: ProductDetailsHeaderProps) => {
  return <div>eee</div>;
};
