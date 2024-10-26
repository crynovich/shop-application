// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.scss';

import { Products } from './products/products';
import { productsService } from './products/products.service';
import { Product } from './products/products.models';
import { ThemeProvider, createTheme } from '@mui/material';
import { blue, orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: orange[500],
    },
  },
});

export function App() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    productsService.getProducts().then((data) => {
      setData(data);
      console.log({ data });
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Products products={data} />
    </ThemeProvider>
  );
}

export default App;
