import React from 'react';
import SelfCam from './SelfCam';
import Header from './Header';
import { StarSelfCamBox, UserSelfCamBox } from './OneonOneMeeting.style';
import Grid from '@mui/material/Grid';

export default function OneonOneMeeting() {
  return (
    <>
      <div>
        <Header></Header>
        <Grid container>
          <Grid xs={6}>
            <StarSelfCamBox>
              <SelfCam></SelfCam>
            </StarSelfCamBox>
          </Grid>
          <Grid xs={6}>
            <UserSelfCamBox>
              <SelfCam></SelfCam>
            </UserSelfCamBox>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
