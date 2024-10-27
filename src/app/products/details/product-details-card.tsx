import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';

export const ProductDetailsCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="column" gap={1}>
          <Typography variant="h6">{title}</Typography>

          <Divider />

          {children}
        </Stack>
      </CardContent>
    </Card>
  );
};
