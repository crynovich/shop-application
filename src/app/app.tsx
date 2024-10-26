import { useEffect, useState } from 'react';
import { Products } from './products/products';
import { productsService } from './products/products.service';
import { Product } from './products/products.models';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import { blue, orange } from '@mui/material/colors';
import { NavigationBar } from './navigation-bar/navigation-bar';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: orange[900],
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
      <Stack direction="column" className="h-full">
        <NavigationBar />
        <Box className="overflow-auto p-4">
          {/* navigation goes here */}
          <Products products={data} />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
