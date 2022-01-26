import React from 'react';
import { OneonOneDisplayBox } from './OneonOneStanby.style';
// import { WaitingTimeBox } from './OneonOneStanby.style';
import { StanbySelfCamBox } from './OneonOneStanby.style';
import { StanbyChattingBox } from './OneonOneStanby.style';
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
            <OneonOneDisplayBox></OneonOneDisplayBox>
          </Grid>
          <Grid xs={3}>
            <WaitingTimeWrapper>
              {/* 순서, 타이머 넣기 */}
              {/* <WaitingTimeBox></WaitingTimeBox> */}
            </WaitingTimeWrapper>
            <ChattingWrapper>
              <StanbyChattingBox></StanbyChattingBox>
            </ChattingWrapper>

            <SelfCamWrapper>
              <StanbySelfCamBox></StanbySelfCamBox>
            </SelfCamWrapper>
          </Grid>
        </Grid>
      </StanbyBox>
    </>
  );
}
