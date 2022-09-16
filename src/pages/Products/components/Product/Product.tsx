import { FC, useState } from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import { ProductProps } from '../../../../contexts';
import { ProductDetail } from '../ProductDetail';

export const Product: FC<{ product: ProductProps }> = ({ product }) => {
  const [detailIsOpen, setDetailIsOpen] = useState(false);

  const { title, description, image } = product;

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const imgUrl = image || 'https://via.placeholder.com/345x394';

  const toggleDetail = (): void => {
    setDetailIsOpen(!detailIsOpen);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={toggleDetail}>
          <CardMedia component="img" alt="product image" image={imgUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <ProductDetail toggle={toggleDetail} open={detailIsOpen} product={product} />
    </>
  );
};
