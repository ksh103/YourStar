import React from 'react';
import styled from 'styled-components';
import RandomChoiceMain from '../CommonComponents/MainItems/Game/RandomChoiceMain';
import LongStick from '../CommonComponents/BottomItems/LongStick';
import ScheduleListSelect from '../CommonComponents/RightSideItems/Star/ScheduleListSelect';
import SmallChatting from '../CommonComponents/RightSideItems/Chatting/SmallChatting';
import { BackgroundDiv } from '../styles/roomGlobal';

export default function StarRandom() {
  return (
    <BackgroundDiv>
      <RandomChoiceMain></RandomChoiceMain>
      <ScheduleListSelect></ScheduleListSelect>
      <SmallChatting></SmallChatting>
      <LongStick></LongStick>
    </BackgroundDiv>
  );
}
