import { FC } from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import { ProductProps } from '../../../../contexts';
import { useModal } from '../../../../hooks';
import { ProductDetail } from '../ProductDetail';

export const Product: FC<{ product: ProductProps }> = ({ product }) => {
  const { title, description, image } = product;

  const { openModal, setComponent } = useModal();

  const imgUrl = image || 'https://via.placeholder.com/345x394';

  const openProductView = (): void => {
    setComponent(<ProductDetail product={product} />);
    openModal();
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={openProductView}>
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
    </>
  );
};
