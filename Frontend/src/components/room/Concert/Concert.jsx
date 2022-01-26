import React from 'react';
import styled from 'styled-components';
import EmoziBar from '../CommonComponents/BottomItems/Emozi/EmoziBar';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function Concert() {
  return (
    <BackgroundDiv>
      <EmoziBar></EmoziBar>
    </BackgroundDiv>
  );
}
