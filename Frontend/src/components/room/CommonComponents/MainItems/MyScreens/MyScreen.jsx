import React from 'react';
import styled from 'styled-components';
import MyScreenAngle from './MyScreenAngle';
import { MyScreenDiv } from '../Main.style';

const QuestionMyScreen = styled.div`
  width: 14.843vw;
  height: 22.47vh;
  background-color: white;
  border-radius: 3vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

export default function MyScreen() {
  return (
    <MyScreenDiv>
      <QuestionMyScreen>
        <MyScreenAngle></MyScreenAngle>
      </QuestionMyScreen>
    </MyScreenDiv>
  );
}
