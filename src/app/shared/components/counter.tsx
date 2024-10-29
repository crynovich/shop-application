import { IconButton, Stack, TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

interface CounterProps {
  quantity: number;
  onChange: (newValue: number) => void;
}

export const Counter = ({ quantity, onChange }: CounterProps) => {
  const handleIncrement = () => {
    onChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) onChange(quantity - 1);
  };

  return (
    <Stack direction="row">
      <IconButton onClick={handleDecrement}>
        <RemoveCircleOutlineIcon />
      </IconButton>

      <TextField
        value={quantity}
        size="small"
        variant="outlined"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        sx={{
          width: 50,
        }}
      />
      <IconButton onClick={handleIncrement}>
        <AddCircleOutlineIcon />
      </IconButton>
    </Stack>
  );
};
