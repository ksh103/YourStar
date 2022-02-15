import Header from './Header';
import {
  StarSelfCamBox,
  UserSelfCamBox,
  MainDiv,
} from './OneonOneMeeting.style';
import StarVideoComponent from '../../../../pages/Room/StarVideoComponent';
import UserVideoComponent from '../../../../pages/Room/UserVideoComponent';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import {
  SmallBoxSelectSchedule,
  ConcertChattingBox,
  ConcertChattingListBox,
  ConcertChattingInputBox,
  SmallBox,
  SmallChattingInputBox,
  SmallChattingListBox,
} from '../../CommonComponents/RightSideItems/Chatting/Chatting.style';

export default function OneonOneMeetingStar() {
  const { me } = useSelector(state => state.mypage);
  const { mainStreamManager, publisher, onebyoneStream } = useSelector(
    state => ({
      mainStreamManager: state.MeetingRoom.mainStreamManager,
      publisher: state.MeetingRoom.publisher,
      onebyoneStream: state.MeetingRoom.onebyoneStream,
    })
  );

  return (
    <>
      <MainDiv>
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <StarSelfCamBox>
              {mainStreamManager && (
                <StarVideoComponent streamManager={mainStreamManager} />
              )}
            </StarSelfCamBox>
          </Grid>
          <Grid item xs={5}>
            <UserSelfCamBox>
              {me.code === 3 && (
                <UserVideoComponent streamManager={publisher} />
              )}
              {me.code === 4 && onebyoneStream && (
                <UserVideoComponent streamManager={onebyoneStream} />
              )}
            </UserSelfCamBox>
          </Grid>
          <Grid item xs={2}>
            <SmallBoxSelectSchedule>
              <Header></Header>
            </SmallBoxSelectSchedule>
            <SmallBox>
              <SmallChattingListBox></SmallChattingListBox>
              <SmallChattingInputBox></SmallChattingInputBox>
            </SmallBox>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            ></div>
          </Grid>
        </Grid>
      </MainDiv>
    </>
  );
}
