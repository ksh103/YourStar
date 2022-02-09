import React from 'react';
import Header from './Header';
import { StarSelfCamBox, UserSelfCamBox } from './OneonOneMeeting.style';
import StarVideoComponent from '../../../../pages/Room/StarVideoComponent';
import UserVideoComponent from '../../../../pages/Room/UserVideoComponent';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

export default function OneonOneMeetingStar() {
  const { mainStreamManager, publisher } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
    publisher: state.MeetingRoom.publisher,
  }));
  return (
    <>
      <div>
        <Header></Header>
        <Grid container>
          <Grid xs={6}>
            <StarSelfCamBox>
              {mainStreamManager && (
                <StarVideoComponent streamManager={mainStreamManager} />
              )}
            </StarSelfCamBox>
          </Grid>
          <Grid xs={6}>
            <UserSelfCamBox>
              {publisher && <UserVideoComponent streamManager={publisher} />}
            </UserSelfCamBox>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
