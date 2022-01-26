import React from 'react';
import styled from 'styled-components';
import EmoziBar from '../CommonComponents/BottomItems/Emozi/EmoziBar';
import { HalfSideDiv1 } from '../CommonComponents/RightSideItems/Chatting/Chatting.style';
import {
  ConcertChattingBox,
  ConcertChattingInputBox,
  ConcertChattingListBox,
} from '../CommonComponents/RightSideItems/Chatting/Chatting.style';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

const ConcertWrapper = styled.div`
  position: absolute;
  top: 4.5%;
  left: 8%;
`;

const ConcertDisplayBox = styled.div`
  /* border: solid red; */
  border-radius: 1vw;
  height: 75vh;
  width: 60vw;
  background-color: white;
  box-shadow: 0.306vh 0.306vh gray;
`;

export default function Concert() {
  return (
    <BackgroundDiv>
      <ConcertWrapper>
        <ConcertDisplayBox></ConcertDisplayBox>
      </ConcertWrapper>
      <HalfSideDiv1>
        <ConcertChattingBox></ConcertChattingBox>
        <ConcertChattingInputBox></ConcertChattingInputBox>
        <ConcertChattingListBox></ConcertChattingListBox>
      </HalfSideDiv1>
      <EmoziBar></EmoziBar>
    </BackgroundDiv>
  );
}
