import { List, ListItem } from '@mui/material';

export const ProductFeatures = ({ features }: { features: string[] }) => {
  return (
    <List
      //   todo: fix the inline overrides
      sx={{
        listStyleType: 'disc',
        pl: 4,
      }}
    >
      {features.map((feature) => (
        <ListItem
          key={feature}
          sx={{
            display: 'list-item',
          }}
        >
          {feature}
        </ListItem>
      ))}
    </List>
  );
};
