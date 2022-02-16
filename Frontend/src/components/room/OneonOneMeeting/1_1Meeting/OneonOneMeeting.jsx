import Header from './Header';
import {
  StarSelfCamBox,
  UserSelfCamBox,
  MainDiv,
  SmallBox,
  ChattingListBox,
  ChattingInputBox,
} from './OneonOneMeeting.style';
import StarVideoComponent from '../../../../pages/Room/StarVideoComponent';
import UserVideoComponent from '../../../../pages/Room/UserVideoComponent';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { SmallBoxSelectSchedule } from '../../CommonComponents/RightSideItems/Chatting/Chatting.style';

export default function OneonOneMeetingStar() {
  const { me } = useSelector(state => state.mypage);
  const { mainStreamManager, onebyoneStream, backgroundColor, publisher } =
    useSelector(state => ({
      mainStreamManager: state.MeetingRoom.mainStreamManager,
      publisher: state.MeetingRoom.publisher,
      onebyoneStream: state.MeetingRoom.onebyoneStream,
      backgroundColor: state.MeetingRoom.backgroundColor,
    }));

  const getNicknameTag = () => {
    if (onebyoneStream !== undefined) {
      return JSON.parse(
        onebyoneStream.stream.streamManager.stream.connection.data
      ).clientData;
    } else {
      return null;
    }
  };

  return (
    <>
      <MainDiv>
        <Grid container spacing={1.5}>
          <Grid item xs={4.5}>
            <StarSelfCamBox>
              {mainStreamManager && (
                <StarVideoComponent streamManager={mainStreamManager} />
              )}
            </StarSelfCamBox>
          </Grid>
          <Grid item xs={4.5}>
            <UserSelfCamBox>
              {me.code === 3 && publisher && (
                <UserVideoComponent streamManager={publisher} />
              )}
              {me.code === 4 && onebyoneStream && (
                <UserVideoComponent streamManager={onebyoneStream} />
              )}
            </UserSelfCamBox>
          </Grid>
          <Grid item xs={2}>
            <SmallBoxSelectSchedule>
              <Header userNick={getNicknameTag()}></Header>
            </SmallBoxSelectSchedule>
            <SmallBox>
              <ChattingListBox></ChattingListBox>
              <ChattingInputBox
                placeholder="메시지 보내기"
                color={backgroundColor}
              ></ChattingInputBox>
            </SmallBox>
          </Grid>
        </Grid>
      </MainDiv>
    </>
  );
}
