import { Box, Stack, ThemeProvider } from '@mui/material';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './products/cart/context/cart.context.provider';
import { shopAppTheme } from './config/theme.config';
import { AppRoutes } from './config/app-routes';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={shopAppTheme}>
        <CartContextProvider>
          <Stack direction="column" className="h-full">
            <NavigationBar />
            <Box className="overflow-auto p-4 h-full">
              <AppRoutes />
            </Box>
          </Stack>
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
