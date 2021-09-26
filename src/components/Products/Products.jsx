import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
  {
    id: 1,
    name: 'Massive',
    description: 'Massive X',
    price: '£499',
    image: 'https://mixedinkey.com/wp-content/uploads/2020/07/FL-Massive.png',
  },

  {
    id: 2,
    name: 'Omnisphere',
    description: 'Omnisphere',
    price: '£899',
    image:
      'https://www.spectrasonics.net/products/omnisphere/images/slideshow26/Omnisphere-2-Slide-20.jpg',
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
