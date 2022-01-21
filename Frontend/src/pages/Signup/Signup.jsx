import React from 'react';
import { FiveGrid, SignupSevenGrid, LoginGrid } from '../Login/DividGrid';
import { Block } from '../../styles/variables';
import Grid from '@mui/material/Grid';
import { LoginSignupBlock } from '../Login/Login.style';

export default function Signup() {
  const react = console.log('야호');

  return (
    <LoginSignupBlock>
      <Grid
        container
        style={{
          height: '100%',
        }}
      >
        <SignupSevenGrid></SignupSevenGrid>
      </Grid>
    </LoginSignupBlock>
  );
}
