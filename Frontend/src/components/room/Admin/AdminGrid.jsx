import React from 'react';
import styled from 'styled-components';
import StarChosungScreen from '../CommonComponents/MainItems/Game/StarChosungScreen';
import ScheduleListSelect from '../CommonComponents/RightSideItems/Star/ScheduleListSelect';
import SmallChatting from '../CommonComponents/RightSideItems/Chatting/SmallChatting';
import UserSelfCamRight from '../CommonComponents/RightSideItems/User/UserSelfCamRight';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function AdminGrid() {
  return (
    <BackgroundDiv>
      <StarChosungScreen></StarChosungScreen>
      <ScheduleListSelect></ScheduleListSelect>
      <SmallChatting></SmallChatting>
      <UserSelfCamRight></UserSelfCamRight>
    </BackgroundDiv>
  );
}
