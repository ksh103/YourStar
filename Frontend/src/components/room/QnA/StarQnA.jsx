import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import QuestionMainScreen from '../CommonComponents/MainItems/Game/QuestionMainScreen';
import SubStickBar from '../CommonComponents/BottomItems/QnAstick/SubStickBar';
import LongStick from '../CommonComponents/BottomItems/LongStick';
import ScheduleListSelect from '../CommonComponents/RightSideItems/Star/ScheduleListSelect';
import SmallChatting from '../CommonComponents/RightSideItems/Chatting/SmallChatting';
import { useSelector, useDispatch } from 'react-redux';
import StarQnAListScreen from '../CommonComponents/MainItems/Game/StarQnAListScreen';
import { changeQnAtoggle } from '../../../store/modules/meetingRoom';
import {
  AddQnaList,
} from '../../../store/modules/meetingRoom';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function StarQnA() {
  const { StarQnAtoggle } = useSelector(state => ({
    StarQnAtoggle: state.MeetingRoom.StarQnAtoggle,
  }));
  const { storeSession } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
  }));

  const dispatch = useDispatch();

  storeSession.on('signal:QnAFromUser', event => {
    dispatch(AddQnaList({text : event.data}))
  })

  return (
    <BackgroundDiv>
      {StarQnAtoggle === true ? (
        <StarQnAListScreen></StarQnAListScreen>
      ) : (
        <>
          <QuestionMainScreen></QuestionMainScreen>
          <SubStickBar></SubStickBar>
        </>
      )}
      <ScheduleListSelect></ScheduleListSelect>
      <SmallChatting></SmallChatting>
      <LongStick></LongStick>
    </BackgroundDiv>
  );
}
