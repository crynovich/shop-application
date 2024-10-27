import { CircularProgress, Stack } from '@mui/material';

export const Loading = () => {
  return (
    <Stack className="w-full" justifyContent="center" alignItems="center">
      <CircularProgress size="4rem" />
    </Stack>
  );
};
