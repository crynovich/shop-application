import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import { blue, orange } from '@mui/material/colors';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductDetails } from './products/details/product-details';
import { CartContextProvider } from './products/cart/context/cart.context.provider';
import { Products } from './products/list/products';

// todo: move this out of the app tsx
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
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartContextProvider>
          <Stack direction="column" className="h-full">
            <NavigationBar />
            <Box className="overflow-auto p-4 h-full">
              {/* todo: move this out of the app tsx */}
              <Routes>
                <Route path="/" element={<Products />}></Route>
                <Route path="/:productId" element={<ProductDetails />}></Route>
              </Routes>
            </Box>
          </Stack>
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
