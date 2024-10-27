import { Button, Divider, Stack, Typography } from '@mui/material';
import { EURO_SYMBOL } from '../../shared/models/constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface ProductDetailsHeaderProps {
  id: number;
  name: string;
  price: number;
  onBackClick?: () => null;
  onAddToCartClick?: (id: number) => null;
}

export const ProductDetailsHeader = ({
  name,
  price,
}: ProductDetailsHeaderProps) => {
  return (
    <Stack direction="column" gap={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap={3}>
          <Button variant="outlined">
            <ArrowBackIcon />
            Back
          </Button>

          <Typography variant="h5">
            {name} | {price}
            {EURO_SYMBOL}
          </Typography>
        </Stack>

        {/* todo: make the buttons switch to icon buttons on smaller screens */}
        <Button variant="outlined" color="secondary">
          <AddShoppingCartIcon />
          Add to cart
        </Button>
      </Stack>

      <Divider />
    </Stack>
  );
};
