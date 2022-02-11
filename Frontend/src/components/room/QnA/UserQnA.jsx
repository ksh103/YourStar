import React from 'react';
import styled from 'styled-components';
import QuestionMainScreen from '../CommonComponents/MainItems/Game/QuestionMainScreen';
import SubStickBar from '../CommonComponents/BottomItems/QnAstick/SubStickBar';
import MyScreen from '../CommonComponents/MainItems/MyScreens/MyScreen';
import OtherPersonScreen from '../CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
import LongChatting from '../CommonComponents/RightSideItems/Chatting/LongChatting';
import { useSelector } from 'react-redux';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

// 여기서 받게 해보자!
// 여기서 받아보쟈!

export default function UserQnA() {
  const { storeSession } = useSelector(state => state.MeetingRoom);

  const qnaContents = () => {
    this.storeSession.on('signal:qnaContents', event => {
      console.log(event);
      // return (
      //   <div></div>
      // )
    });
  };

  return (
    <BackgroundDiv>
      <QuestionMainScreen></QuestionMainScreen>
      <SubStickBar></SubStickBar>
      <LongChatting></LongChatting>
      <MyScreen></MyScreen>
      <OtherPersonScreen></OtherPersonScreen>
    </BackgroundDiv>
  );
}
