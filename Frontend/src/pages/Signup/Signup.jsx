import React from 'react';
import { SignupSevenGrid } from '../Login/DividGrid';
import { Block } from '../../styles/variables';
import Grid from '@mui/material/Grid';
import {
  LoginSignupBlock,
  InFormBlock,
  ScheduleWrapper,
} from '../Login/Login.style';

export default function Signup() {
  const react = console.log('야호');

  return (
    <ScheduleWrapper>
      <InFormBlock>
        <Grid
          container
          style={{
            height: '100%',
          }}
        >
          <SignupSevenGrid></SignupSevenGrid>
        </Grid>
      </InFormBlock>
    </ScheduleWrapper>
  );
}
