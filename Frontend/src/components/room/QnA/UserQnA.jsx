import React, { useEffect, useState } from 'react';
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

const QnaContents = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: medium;
`;

// 여기서 받게 해보자!
// 여기서 받아보쟈!

export default function UserQnA() {
  const { storeSession } = useSelector(state => state.MeetingRoom);
  const [test, setTest] = useState(false);
  const [data, setData] = useState('');

  storeSession.on('signal:qnaContents', event => {
    console.log(event, '이벤트가 들어왔습니다.');
    setTest(true);
    setData(event.data);
    // 받은 데이터로 모달창 띄우기
    // 모달창 종료될때  다시 setTest : false
  });

  return (
    <BackgroundDiv>
      <QuestionMainScreen></QuestionMainScreen>
      <SubStickBar></SubStickBar>
      <LongChatting></LongChatting>
      <MyScreen></MyScreen>
      {test && <QnaContents>{data}</QnaContents>}
      <OtherPersonScreen></OtherPersonScreen>
    </BackgroundDiv>
  );
}
