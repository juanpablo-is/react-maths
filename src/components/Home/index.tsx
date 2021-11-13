import React from 'react';
import Button from '../common/Button';
import Grid from '../common/Grid';
import { Wrapper } from './Homepage.styles';

const Homepage = () => {
  return (
    <Wrapper>
      <Grid columns={2}>
        <Button text="Suma" path="/add" />
        <Button text="Resta" path="/subtraction" />
        <Button text="Multiplicación" path="/multiplication" />
        <Button text="División" path="/divide" />
      </Grid>
    </Wrapper>
  );
};

export default Homepage;
