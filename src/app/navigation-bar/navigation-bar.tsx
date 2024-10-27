import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export function NavigationBar() {
  const navigate = useNavigate();

  const handleAppClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Stack
          className="w-full"
          direction="row"
          justifyContent="space-between"
        >
          <Button color="inherit" onClick={handleAppClick}>
            Shop Application
          </Button>

          <IconButton size="large" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
