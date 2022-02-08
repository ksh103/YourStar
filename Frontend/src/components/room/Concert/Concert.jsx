import React from 'react';
import styled from 'styled-components';
import EmoziBar from '../CommonComponents/BottomItems/Emozi/EmoziBar';
import { HalfSideDiv1 } from '../CommonComponents/RightSideItems/Chatting/Chatting.style';
import {
  ConcertChattingBox,
  ConcertChattingInputBox,
  ConcertChattingListBox,
} from '../CommonComponents/RightSideItems/Chatting/Chatting.style';
import { useSelector, useDispatch } from 'react-redux';
import {
  ChattingAction,
  ChattingInputChange,
} from '../../../store/modules/meetingRoom';

// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

const ConcertWrapper = styled.div`
  position: absolute;
  top: 4.5%;
  left: 8%;
`;

const ConcertDisplayBox = styled.div`
  /* border: solid red; */
  border-radius: 1vw;
  height: 75vh;
  width: 60vw;
  background-color: white;
  box-shadow: 0.306vh 0.306vh gray;
`;

export default function Concert() {
  const [testInput, setTestinput] = React.useState('');

  const { chattingList } = useSelector(state => ({
    chattingList: state.MeetingRoom.chattingList,
  }));
  const dispatch = useDispatch();

  const SubmitText = Input => dispatch(ChattingInputChange(Input));
  const AppendChattingList = inputValue => dispatch(ChattingAction(inputValue));

  const handleChatMessageChange = e => {
    setTestinput(e.target.value);
  };

  const { storeSession } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
  }));

  const { me } = useSelector(state => state.mypage);

  const SendMessage = e => {
    if (e.key === 'Enter') {
      const inputValue = {
        userName: me.nick,
        text: testInput,
        chatClass: 'messages__item--operator',
      };
      storeSession.signal({
        data: `${me.nick},${testInput}`,
        to: [],
        type: 'chat',
      });
      SubmitText(testInput);
      AppendChattingList(inputValue);
      setTestinput('');
    }
  };

  return (
    <BackgroundDiv>
      <ConcertWrapper>
        <ConcertDisplayBox></ConcertDisplayBox>
      </ConcertWrapper>
      <HalfSideDiv1>
        <ConcertChattingBox></ConcertChattingBox>
        <ConcertChattingInputBox
          onKeyPress={SendMessage}
          value={testInput}
          onChange={handleChatMessageChange}
        ></ConcertChattingInputBox>
        <ConcertChattingListBox>
          {chattingList.map((value, idx) => {
            return (
              <div key={idx + value.text}>
                <p>
                  {value.userName} : {value.text}
                </p>
              </div>
            );
          })}
        </ConcertChattingListBox>
      </HalfSideDiv1>
      <EmoziBar></EmoziBar>
    </BackgroundDiv>
  );
}
