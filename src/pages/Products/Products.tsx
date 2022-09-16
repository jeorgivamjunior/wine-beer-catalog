import { FC, useContext } from 'react';

import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { ProductContext } from '../../contexts';
import { FilterBar, Product } from './components';

export const Products: FC = () => {
  const { products } = useContext(ProductContext);

  return (
    <Container>
      <Typography marginTop={5} align="center" variant="h3" gutterBottom>
        Products
      </Typography>

      <FilterBar />

      <Grid container spacing={2} justifyContent="space-between">
        {products?.map((product) => (
          <Grid key={product.title}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
