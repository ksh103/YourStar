import React from 'react';
import styled from 'styled-components';
import OtherScreenAngle from './OtherScreenAngle';
const StarScreen = styled.div`
  overflow: auto;
  position: relative;
  width: 60.041vw;
  height: 82vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const PerScPosition = styled.div`
  position: relative;
  top: 2%;
  left: 4%;
`;

export default function StarChosungScreen() {
  return (
    <StarScreen>
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
        <OtherScreenAngle></OtherScreenAngle>
        <OtherScreenAngle></OtherScreenAngle>
        <OtherScreenAngle></OtherScreenAngle>
        <OtherScreenAngle></OtherScreenAngle>
        <OtherScreenAngle></OtherScreenAngle>
      </PerScPosition>
    </StarScreen>
  );
}
