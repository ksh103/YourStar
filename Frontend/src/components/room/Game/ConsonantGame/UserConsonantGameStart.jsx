import React from 'react';
import styled from 'styled-components';
import DefaultStarScreen from '../../CommonComponents/MainItems/DefaultStarScreen';
import MyScreen from '../../CommonComponents/MainItems/MyScreens/MyScreen';
import OtherPersonScreen from '../../CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
import ConsonantAllRank from '../../CommonComponents/RightSideItems/Game/ConsonantGame/ConsonantAllRank';
import ConsonantUserInput from '../../CommonComponents/RightSideItems/Game/ConsonantGame/ConsonantUserInput';
import { useSelector, useDispatch } from 'react-redux';
import SmallChatting from '../../CommonComponents/RightSideItems/Chatting/SmallChatting';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function UserConsonantGameStart() {
  return (
    <BackgroundDiv>
      <DefaultStarScreen></DefaultStarScreen>
      <ConsonantAllRank></ConsonantAllRank>
      <ConsonantUserInput></ConsonantUserInput>
      <MyScreen></MyScreen>
      <OtherPersonScreen></OtherPersonScreen>
    </BackgroundDiv>
  );
}
