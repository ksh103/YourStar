import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import OtherScreenAngle from './OtherScreenAngle';

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

export default function OtherPersonScreen() {
  return (
    <OtherPersonSc>
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
    </OtherPersonSc>
  );
}
