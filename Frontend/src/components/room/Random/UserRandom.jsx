import React from 'react';
import styled from 'styled-components';
import RandomChoiceMain from '../CommonComponents/MainItems/Game/RandomChoiceMain';
import MyScreen from '../CommonComponents/MainItems/MyScreens/MyScreen';
import OtherPersonScreen from '../CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
import LongChatting from '../CommonComponents/RightSideItems/Chatting/LongChatting';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function UserRandom() {
  const { storeSession } = useSelector(state => state.MeetingRoom);

  storeSession.on('signal:random', event => {
    console.log(event, '========랜덤정보 수신');
    // 스토어에 저장시켜주기, 불러오기
    setTimeout(swal("Here's the title!", "...and here's the text!"), 3000);
  });

  return (
    <BackgroundDiv>
      <RandomChoiceMain></RandomChoiceMain>
      <LongChatting></LongChatting>
      <MyScreen></MyScreen>
      <OtherPersonScreen></OtherPersonScreen>
    </BackgroundDiv>
  );
}
