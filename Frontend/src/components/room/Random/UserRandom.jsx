import React from 'react';
import styled from 'styled-components';
import RandomChoiceMain from '../CommonComponents/MainItems/Game/RandomChoiceMain';
import MyScreen from '../CommonComponents/MainItems/MyScreens/MyScreen';
import OtherPersonScreen from '../CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
import LongChatting from '../CommonComponents/RightSideItems/Chatting/LongChatting';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function UserRandom() {
  return (
    <BackgroundDiv>
      <RandomChoiceMain></RandomChoiceMain>
      <LongChatting></LongChatting>
      <MyScreen></MyScreen>
      <OtherPersonScreen></OtherPersonScreen>
    </BackgroundDiv>
  );
}
