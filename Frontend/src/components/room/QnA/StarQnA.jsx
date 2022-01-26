import React from 'react';
import styled from 'styled-components';
import QuestionMainScreen from '../../../components/room/CommonComponents/MainItems/Game/QuestionMainScreen';
import SubStickBar from '../../../components/room/CommonComponents/BottomItems/QnAstick/SubStickBar';
import LongStick from '../CommonComponents/BottomItems/LongStick';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function StarQnA() {
  return (
    <BackgroundDiv>
      <QuestionMainScreen></QuestionMainScreen>
      <SubStickBar></SubStickBar>
      <LongStick></LongStick>
    </BackgroundDiv>
  );
}
