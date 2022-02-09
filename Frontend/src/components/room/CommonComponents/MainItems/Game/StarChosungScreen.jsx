import React from 'react';
import styled from 'styled-components';
import OtherScreenAngle from '../OtherScreen/OtherScreenAngle';
import { MainDiv } from '../Main.style';

const StarScreen = styled.div`
  overflow-x: auto;
  position: relative;
  width: 60.041vw;
  height: 82vh;
  max-height: 82vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const PerScPosition = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  top: 2%;
  left: 3%;
  height: 82vh;
`;

export default function StarChosungScreen() {
  return (
    <MainDiv>
      <StarScreen>
        <PerScPosition>
          <OtherScreenAngle value="3"></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
          <OtherScreenAngle></OtherScreenAngle>
        </PerScPosition>
      </StarScreen>
    </MainDiv>
  );
}
