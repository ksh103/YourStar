import React from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';

const OXuserSc = styled.div`
  position: relative;
  width: 83.541vw;
  height: 66.5vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

export default function OXUserScreen() {
  return (
    <MainDiv>
      <OXuserSc></OXuserSc>
    </MainDiv>
  );
}
