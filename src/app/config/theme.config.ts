import { createTheme } from '@mui/material';
import { blue, orange } from '@mui/material/colors';

export const shopAppTheme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: orange[900],
    },
  },
});
