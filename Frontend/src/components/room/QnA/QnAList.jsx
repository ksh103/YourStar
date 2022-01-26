import React from 'react';
import styled from 'styled-components';
import StarQnAListScreen from '../CommonComponents/MainItems/Game/StarQnAListScreen';
import MyScreen from '../CommonComponents/MainItems/MyScreens/MyScreen';
import OtherPersonScreen from '../../../components/room/CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
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

      <MyScreen></MyScreen>
      <OtherPersonScreen></OtherPersonScreen>
    </BackgroundDiv>
  );
}
