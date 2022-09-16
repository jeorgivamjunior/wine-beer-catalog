import { FC, useContext } from 'react';

import { Container, Paper, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { ProductContext } from '../../contexts';

export const Products: FC = () => {
  const { products } = useContext(ProductContext);

  return (
    <Container>
      <Paper>
        <TextField />
      </Paper>
      <Grid container spacing={2} justifyContent="center">
        {products?.map((product) => (
          <Grid key={product.title}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="wine"
                image="https://www.campoluzenoteca.com/6219-thickbox_default/mauro-2020.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Robert Stein
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mudgee Merlot
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
