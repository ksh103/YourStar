import React from 'react';
import Header from './Header';
import { StarSelfCamBox, UserSelfCamBox } from './OneonOneMeeting.style';
import StarVideoComponent from '../../../../pages/Room/StarVideoComponent';
import UserVideoComponent from '../../../../pages/Room/UserVideoComponent';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

export default function OneonOneMeetingStar() {
  const { me } = useSelector(state => state.mypage);
  const { mainStreamManager, publisher, subscribers } = useSelector(state => ({
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
              {me.code === 3 && (
                <UserVideoComponent streamManager={publisher} />
              )}
              {me.code === 4 && subscribers && (
                <UserVideoComponent streamManager={subscribers[0]} />
              )}
            </UserSelfCamBox>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
