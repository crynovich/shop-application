import { List, ListItem, Typography } from '@mui/material';

interface ProductFeaturesProps {
  features: string[];
}

export const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  const listSx = {
    listStyleType: 'disc',
    pl: 4,
  };

  const listItemSx = {
    display: 'list-item',
  };

  return (
    <List sx={listSx}>
      {features.map((feature) => (
        <ListItem key={feature} sx={listItemSx}>
          <Typography>{feature}</Typography>
        </ListItem>
      ))}
    </List>
  );
};
