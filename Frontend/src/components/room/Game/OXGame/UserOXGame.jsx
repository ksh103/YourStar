import React from 'react';
import styled from 'styled-components';
import OXUserScreen from '../../CommonComponents/MainItems/Game/OXUserScreen';
import OtherPersonScreen from '../../CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
import MyScreen from '../../CommonComponents/MainItems/MyScreens/MyScreen';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function UserOXGame() {
  return (
    <BackgroundDiv>
      <OXUserScreen></OXUserScreen>
      <MyScreen></MyScreen>
      <OtherPersonScreen></OtherPersonScreen>
    </BackgroundDiv>
  );
}
