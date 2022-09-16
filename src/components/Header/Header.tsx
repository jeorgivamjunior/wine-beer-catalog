import { FC } from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

import { ProductFormButton } from '../ProductForm';

export const Header: FC = () => {
  return (
    <AppBar color="secondary" position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Wine and Beer Catalog
        </Typography>
        <ProductFormButton />
      </Toolbar>
    </AppBar>
  );
};
