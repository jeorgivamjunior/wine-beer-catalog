import { FC } from 'react';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { ProductProps } from '../../../../contexts';

export const Product: FC<ProductProps> = ({ title, description, image }) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const imgUrl = image || 'https://via.placeholder.com/345x394';

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="product image" image={imgUrl} />
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
