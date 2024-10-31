import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { IProductInformation } from '../../shared/data-access/products.models';

export const GeneralInformation = ({
  information,
}: {
  information: IProductInformation;
}) => {
  return (
    <Grid container spacing={2}>
      {Object.entries(information).map(([key, value]) => (
        <Grid key={key} size={6}>
          <Typography variant="caption">{key}</Typography>
          <Typography>
            {Array.isArray(value) ? value.join(', ') : value}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
