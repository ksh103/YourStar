import React from 'react';
import styled from 'styled-components';
import RandomChoiceMain from '../../CommonComponents/MainItems/Game/RandomChoiceMain';
import MyScreen from '../../CommonComponents/MainItems/MyScreens/MyScreen';
import OtherPersonScreen from '../../CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
import ConsonantMyRank from '../../CommonComponents/RightSideItems/Game/ConsonantGame/ConsonantMyRank';
import ConsonantUserInput from '../../CommonComponents/RightSideItems/Game/ConsonantGame/ConsonantUserInput';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function UserConsonantGameResult() {
  return (
    <BackgroundDiv>
      <RandomChoiceMain></RandomChoiceMain>
      <ConsonantMyRank></ConsonantMyRank>
      <ConsonantUserInput></ConsonantUserInput>
      <MyScreen></MyScreen>
      <OtherPersonScreen></OtherPersonScreen>
    </BackgroundDiv>
  );
}
