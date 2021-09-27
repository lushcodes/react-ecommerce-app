import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';

const Cart = () => {
  const isEmpty = true;

  const EmptyCart = () => {
    <Typography variant="subtitle1">
      You have no items in your cart!
    </Typography>;
  };

  const FilledCart = () => {};

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
