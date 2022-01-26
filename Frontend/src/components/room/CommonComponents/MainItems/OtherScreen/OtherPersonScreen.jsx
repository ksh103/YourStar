import React from 'react';
import styled from 'styled-components';
import OtherScreenAngle from './OtherScreenAngle';
import { OtherPersonDiv } from '../Main.style';
const OtherPersonSc = styled.div`
  max-width: 65.041vw;
  width: 65.041vw;
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

export default function OtherPersonScreen() {
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
