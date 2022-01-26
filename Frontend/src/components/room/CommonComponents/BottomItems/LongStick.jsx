import React from 'react';
import styled from 'styled-components';
import OtherScreenAngle from '../MainItems/OtherScreen/OtherScreenAngle';
import { OtherPersonDiv } from '../MainItems/Main.style';
const OtherPersonSc = styled.div`
  max-width: 83.541vw;
  width: 83.541vw;
  height: 22.4719vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
  overflow-x: auto;
  white-space: nowrap;
  margin: 0 0;
`;

const PerScPosition = styled.div`
  position: relative;
  top: 4.5%;
  left: 3%;
`;

export default function LongStick() {
  return (
    <OtherPersonDiv>
      <OtherPersonSc>
        <PerScPosition>
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
      </OtherPersonSc>
    </OtherPersonDiv>
  );
}
