import { Button, Divider, Stack, Typography } from '@mui/material';
import { EURO_SYMBOL } from '../../shared/models/constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCallback } from 'react';

interface ProductDetailsHeaderProps {
  id: number;
  name: string;
  price: number;
  onBackClick?: () => void;
  onAddToCartClick?: (id: number) => void;
}

export const ProductDetailsHeader = ({
  id,
  name,
  price,
  onBackClick,
  onAddToCartClick,
}: ProductDetailsHeaderProps) => {
  const handleBackClick = useCallback(() => {
    if (onBackClick) onBackClick();
  }, [onBackClick]);

  const handleAddToCartClick = useCallback(() => {
    if (onAddToCartClick) onAddToCartClick(id);
  }, [id, onAddToCartClick]);

  return (
    <Stack direction="column" gap={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap={3}>
          <Button variant="outlined" onClick={handleBackClick}>
            <ArrowBackIcon />
            Back
          </Button>

          <Typography variant="h5">
            {name} | {price}
            {EURO_SYMBOL}
          </Typography>
        </Stack>

        {/* todo: make the buttons switch to icon buttons on smaller screens */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleAddToCartClick}
        >
          <AddShoppingCartIcon />
          Add to cart
        </Button>
      </Stack>

      <Divider />
    </Stack>
  );
};
