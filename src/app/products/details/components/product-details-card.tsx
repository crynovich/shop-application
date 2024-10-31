import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';

interface ProductDetailsCardProps {
  title: string;
  children: React.ReactNode;
}

export const ProductDetailsCard = ({
  title,
  children,
}: ProductDetailsCardProps) => {
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
