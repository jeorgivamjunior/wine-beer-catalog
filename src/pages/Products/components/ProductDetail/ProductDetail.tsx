import { FC, forwardRef } from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import { ProductProps } from '../../../../contexts';

interface ProductDetailProps {
  product: ProductProps;
  open: boolean;
  toggle: () => void;
}

export const ProductDetail: FC<ProductDetailProps> = ({ product: { title, description, image }, open, toggle }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const imgUrl = image || 'https://via.placeholder.com/345x394';

  const toggleOpen = (): void => toggle();

  return (
    <Dialog
      TransitionComponent={Transition}
      fullWidth
      maxWidth="sm"
      fullScreen={fullScreen}
      open={open}
      onClose={toggleOpen}
    >
      <DialogTitle>Product Detail</DialogTitle>
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
    </Dialog>
  );
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />;
});
