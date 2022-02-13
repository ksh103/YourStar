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
// 포지션작업

export default function StarQnA() {
  const { StarQnAtoggle } = useSelector(state => ({
    StarQnAtoggle: state.MeetingRoom.StarQnAtoggle,
  }));

  return (
    <div>
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
    </div>
  );
}
