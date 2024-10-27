import { Card, IconButton, Stack, Typography } from '@mui/material';
import { Counter } from '../../shared/components/counter';
import DeleteIcon from '@mui/icons-material/Delete';

export const CartItem = () => {
  return (
    <Card variant="outlined" className="p-4">
      <Stack
        direction="row"
        justifyContent="space-between"
        gap={4}
        alignItems="center"
        className="w-full"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          flex="1 1 auto"
          className="overflow-hidden"
        >
          <Stack direction="column" className="overflow-hidden">
            <Typography className="truncate">item 1</Typography>
            <Typography variant="caption">140$</Typography>
          </Stack>
          <Counter />
        </Stack>

        <IconButton className="flex-none">
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Card>
  );
};
