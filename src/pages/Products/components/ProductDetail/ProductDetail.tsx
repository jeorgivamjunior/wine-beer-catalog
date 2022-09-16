import { FC } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Card, CardContent, CardMedia, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';

import { ProductProps } from '../../../../contexts';
import { useModal } from '../../../../hooks';

interface ProductDetailProps {
  product: ProductProps;
}

export const ProductDetail: FC<ProductDetailProps> = ({ product: { title, description, image } }) => {
  const imgUrl = image || 'https://via.placeholder.com/345x394';
  const { closeModal } = useModal();

  return (
    <>
      <DialogTitle>
        Product Detail{' '}
        <IconButton
          onClick={closeModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Card>
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
      </DialogContent>
    </>
  );
};
