import React from 'react';
import styled from 'styled-components';
import StarQnAListScreen from '../CommonComponents/MainItems/Game/StarQnAListScreen';
import MyScreen from '../CommonComponents/MainItems/MyScreens/MyScreen';
import OtherPersonScreen from '../CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
import ScheduleListSelect from '../CommonComponents/RightSideItems/Star/ScheduleListSelect';
import SmallChatting from '../CommonComponents/RightSideItems/Chatting/SmallChatting';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function QnAList() {
  return (
    <BackgroundDiv>
      <StarQnAListScreen></StarQnAListScreen>
      <ScheduleListSelect></ScheduleListSelect>
      <SmallChatting></SmallChatting>
      <MyScreen></MyScreen>
      <OtherPersonScreen></OtherPersonScreen>
    </BackgroundDiv>
  );
}
