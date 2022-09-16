import { FC } from 'react';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { ProductProps } from '../../../../contexts';

export const Product: FC<ProductProps> = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="product image" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
