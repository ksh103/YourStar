import React, { useState } from 'react';
import Header from './Header';
import { StarSelfCamBox, UserSelfCamBox } from './OneonOneMeeting.style';
import StarVideoComponent from '../../../../pages/Room/StarVideoComponent';
import UserVideoComponent from '../../../../pages/Room/UserVideoComponent';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

export default function OneonOneMeetingStar() {
  const [onebyoneStream, setOnebyoneStream] = useState();

  const { me } = useSelector(state => state.mypage);
  const { mainStreamManager, publisher, storeSession } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
    publisher: state.MeetingRoom.publisher,
    storeSession: state.MeetingRoom.storeSession,
  }));

  storeSession.on('streamCreated', event => {
    var subscriber = storeSession.subscribe(event.stream, undefined); // 들어온 사용자의 정보
    var subInfo = JSON.parse(subscriber.stream.connection.data);
    if (subInfo.memberInfo !== undefined) {
      console.log('===== 불러오기 성공 ======');
      // setOnebyoneStream();
      setOnebyoneStream(subscriber);
    }
  });

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
              {me.code === 4 && onebyoneStream && (
                <UserVideoComponent streamManager={onebyoneStream} />
              )}
            </UserSelfCamBox>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
