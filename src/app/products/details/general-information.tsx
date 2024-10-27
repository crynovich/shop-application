import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { ProductInformation } from '../products.models';

export const GeneralInformation = ({
  information,
}: {
  information: ProductInformation;
}) => {
  return (
    <Grid container spacing={2}>
      {Object.entries(information).map(([key, value]) => (
        <Grid key={key} size={6}>
          <Typography variant="caption">{key}</Typography>
          <Typography variant="body1">
            {Array.isArray(value) ? value.join(', ') : value}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
