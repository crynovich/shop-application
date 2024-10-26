import { useEffect, useState } from 'react';
import { Products } from './products/products';
import { productsService } from './products/products.service';
import { Product } from './products/products.models';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import { blue, orange } from '@mui/material/colors';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Stack direction="column" className="h-full">
          <NavigationBar />
          <Box className="overflow-auto p-4">
            <Routes>
              <Route path="/" element={<Products products={data} />}></Route>
              <Route path="/:productId" element={<div> hello </div>}></Route>
            </Routes>
          </Box>
        </Stack>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
