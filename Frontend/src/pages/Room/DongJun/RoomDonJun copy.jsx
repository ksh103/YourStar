import React from 'react';
import QuestionChat from './QuestionChat';
import QuestionMain from './QuestionMainScreen';
import styled from 'styled-components';
// 질문화면
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

// 여기서 position 작업
const ChatDiv = styled.div`
  position: absolute;
  top: 7.967vh;
  left: 73.28vw;
`;

const MainDiv = styled.div`
  position: absolute;
  top: 7.967vh;
  left: 10.479vw;
`;

export default function RoomDonJun() {
  return (
    <BackgroundDiv>
      <MainDiv>
        <QuestionMain></QuestionMain>
      </MainDiv>
      <ChatDiv>
        <QuestionChat></QuestionChat>
      </ChatDiv>
    </BackgroundDiv>
  );
}
