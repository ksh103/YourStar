import React from 'react';
import OneonOneDisplay from './OneonOneDisplay';
import WaitingTime from './WaitingTime';
import StanbySelfCam from './StanbySelfCam';
import Chatting from './Chatting';
import {
  StanbyBox,
  ChattingWrapper,
  WaitingTimeWrapper,
  SelfCamWrapper,
} from './OneonOneStanby.style';
import { Grid } from '@mui/material';
export default function OneonOneStanby() {
  return (
    <>
      <StanbyBox>
        <Grid container>
          <Grid xs={9}>
            <OneonOneDisplay></OneonOneDisplay>
          </Grid>
          <Grid xs={3}>
            <WaitingTimeWrapper>
              <WaitingTime></WaitingTime>
            </WaitingTimeWrapper>
            <ChattingWrapper>
              <Chatting></Chatting>
            </ChattingWrapper>
            <SelfCamWrapper>
              <StanbySelfCam></StanbySelfCam>
            </SelfCamWrapper>
          </Grid>
        </Grid>
      </StanbyBox>
    </>
  );
}
