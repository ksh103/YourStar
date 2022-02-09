import React from 'react';
import styled from 'styled-components';
import MyScreen from '../CommonComponents/MainItems/MyScreens/MyScreen';
import OtherPersonScreen from '../CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
import DefaultUserScreen from '../CommonComponents/MainItems/DefaultUserScreen';
import LongChatting from '../CommonComponents/RightSideItems/Chatting/LongChatting';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function UserBasic() {
  return (
    <BackgroundDiv>
      <DefaultUserScreen></DefaultUserScreen>
      <MyScreen></MyScreen>
      <LongChatting></LongChatting>
      <OtherPersonScreen></OtherPersonScreen>
    </BackgroundDiv>
  );
}
