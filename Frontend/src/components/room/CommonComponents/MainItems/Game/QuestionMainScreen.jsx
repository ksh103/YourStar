import React from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';
// 51 ->
const QuestionMain = styled.div`
  position: relative;
  width: 60.041vw;
  height: 58.0725vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

export default function QuestionMainScreen() {
  return (
    <MainDiv>
      <QuestionMain></QuestionMain>
    </MainDiv>
  );
}
