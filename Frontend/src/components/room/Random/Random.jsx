import React from 'react';
import styled from 'styled-components';
import RandomChoiceMain from '../../../components/room/CommonComponents/MainItems/Game/RandomChoiceMain';
import RandomStick from '../../../components/room/CommonComponents/BottomItems/RandomStick';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function Random() {
  return (
    <BackgroundDiv>
      <RandomChoiceMain></RandomChoiceMain>
      <RandomStick></RandomStick>
    </BackgroundDiv>
  );
}
