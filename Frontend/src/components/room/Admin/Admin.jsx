import React from 'react';
import DefaultStarScreen from '../CommonComponents/MainItems/DefaultStarScreen';
import LongStick from '../CommonComponents/BottomItems/LongStick';
import ScheduleListSelect from '../CommonComponents/RightSideItems/Star/ScheduleListSelect';
import SmallChatting from '../CommonComponents/RightSideItems/Chatting/SmallChatting';

export default function Admin() {
  return (
    <>
      <DefaultStarScreen></DefaultStarScreen>
      <ScheduleListSelect></ScheduleListSelect>
      <SmallChatting></SmallChatting>
      <LongStick></LongStick>
    </>
  );
}
