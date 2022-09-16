import { FC, useContext, useState, forwardRef } from 'react';

import {
  useMediaQuery,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  TextField,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useForm, Controller } from 'react-hook-form';

import { ProductContext, ProductProps } from '../../contexts';

export const ProductForm: FC = () => {
  const { addNewProduct } = useContext(ProductContext);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      id: '',
      title: '',
      description: '',
      image: '',
    },
  });

  const onSubmit = (product: ProductProps): void => {
    addNewProduct(product);
    reset();
  };

  const toggleOpen = (): void => {
    setOpen(!open);
  };

  return (
    <div>
      <Button color="inherit" onClick={toggleOpen}>
        Add New Product
      </Button>

      <Dialog
        TransitionComponent={Transition}
        fullWidth
        maxWidth="sm"
        fullScreen={fullScreen}
        open={open}
        onClose={toggleOpen}
      >
        <form onSubmit={handleSubmit(onSubmit) as () => void}>
          <DialogTitle>Add new product</DialogTitle>
          <DialogContent>
            <div>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Title"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Description"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Image URL"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleOpen}>Cancel</Button>
            <Button type="submit" onClick={toggleOpen} autoFocus>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
