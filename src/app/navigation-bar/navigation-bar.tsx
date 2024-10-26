import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

export function NavigationBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="flex-1">
          Shop Application
        </Typography>

        <IconButton size="large" color="inherit">
          <Badge badgeContent={17} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
