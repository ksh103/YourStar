import React from 'react';
import styled from 'styled-components';
import QuestionMainScreen from '../CommonComponents/MainItems/Game/QuestionMainScreen';
import SubStickBar from '../CommonComponents/BottomItems/QnAstick/SubStickBar';
import MyScreen from '../CommonComponents/MainItems/MyScreens/MyScreen';
import OtherPersonScreen from '../CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
import LongChatting from '../CommonComponents/RightSideItems/Chatting/LongChatting';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';

import { AddQnaList } from '../../../store/modules/meetingRoom';

// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function UserQnA() {
  const { storeSession } = useSelector(state => state.MeetingRoom);
  const dispatch = useDispatch();

  storeSession.on('signal:qnaContents', event => {
    if (event.data.length > 1) {  // qna 모달창 여는 신호 받음(값이 있는 경우)
      swal({
        text: event.data,
        button: false,
        closeOnClickOutside: false, // 사용자가 모달창 못닫게 
      })
    } else {  // qna 모달창 닫는 신호 받았을 경우 
      swal.close()
    }
  });

  storeSession.on('signal:QnAmode', event => {
    if (event.data === 'start') {
      swal({
        text: '스타에게 궁금하거나 하고 싶었던 말을 적어 보내보세요 !',
        content: "input",
        button: '전송'
      }).then( value => {
        storeSession.signal({
          data: value,
          to: [event.from],
          type: 'QnAFromUser'
        })
        swal({
          text: '전송 완료 ! 다른 분들이 포스트잇을 적을 때까지 잠시만 기다려주세요 !',
          icon: 'success',
          button: 'ok!'
      })
      })
    }
  })

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
