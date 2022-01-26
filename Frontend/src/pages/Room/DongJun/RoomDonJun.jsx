import React from 'react';
import QuestionChat from './QuestionChat';
import QuestionMainScreen from './QuestionMainScreen';
import styled from 'styled-components';
import MyScreen from './MyScreen';
import SubStickBar from './SubStickBar';
import OtherPersonScreen from './OtherPersonScreen';
// 질문화면

// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

const ChatDiv = styled.div`
  position: absolute;
  top: 4.5%;
  right: 8%;
`;

const MainDiv = styled.div`
  position: absolute;
  top: 4.5%;
  left: 8%;
`;

const MyScreenDiv = styled.div`
  position: absolute;
  top: 74%;
  left: 8%;
`;

const StickBarDiv = styled.div`
  position: absolute;
  top: 65.5%;
  left: 8%;
`;

const OtherPersonDiv = styled.div`
  position: absolute;
  top 74%;
  right: 8%
`;

export default function RoomDonJun() {
  return (
    <BackgroundDiv>
      <MainDiv>
        <QuestionMainScreen></QuestionMainScreen>
      </MainDiv>
      <ChatDiv>
        <QuestionChat></QuestionChat>
      </ChatDiv>
      <MyScreenDiv>
        <MyScreen></MyScreen>
      </MyScreenDiv>
      <StickBarDiv>
        <SubStickBar></SubStickBar>
      </StickBarDiv>
      <OtherPersonDiv>
        <OtherPersonScreen></OtherPersonScreen>
      </OtherPersonDiv>
    </BackgroundDiv>
  );
}
