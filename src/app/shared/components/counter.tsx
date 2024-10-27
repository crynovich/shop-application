import { IconButton, Stack, TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from 'react';

export const Counter = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

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
