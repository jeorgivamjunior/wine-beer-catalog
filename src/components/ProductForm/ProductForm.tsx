import { FC, useContext } from 'react';

import { Button, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

import { ProductContext, ProductProps } from '../../contexts';
import { useModal } from '../../hooks';

export const ProductFormButton: FC = () => {
  const { openModal, setComponent } = useModal();

  const toggleOpen = (): void => {
    setComponent(<ProductForm />);
    openModal();
  };

  return (
    <Button color="inherit" onClick={toggleOpen}>
      Add New Product
    </Button>
  );
};

export const ProductForm: FC = () => {
  const { addNewProduct } = useContext(ProductContext);
  const { closeModal } = useModal();

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

  return (
    <>
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
          <Button onClick={closeModal}>Cancel</Button>
          <Button type="submit" onClick={closeModal} autoFocus>
            Save
          </Button>
        </DialogActions>
      </form>
    </>
  );
};
