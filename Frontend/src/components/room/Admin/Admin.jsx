import React from 'react';
import styled from 'styled-components';
import DefaultUserScreen from '../CommonComponents/MainItems/DefaultUserScreen';
import LongStick from '../CommonComponents/BottomItems/LongStick';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function Admin() {
  return (
    <BackgroundDiv>
      <DefaultUserScreen></DefaultUserScreen>
      <LongStick></LongStick>
    </BackgroundDiv>
  );
}
