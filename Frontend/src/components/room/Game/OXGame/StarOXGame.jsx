import React from 'react';
import styled from 'styled-components';
import StarChosungScreen from '../../CommonComponents/MainItems/Game/StarChosungScreen';
import ScheduleListSelect from '../../CommonComponents/RightSideItems/Star/ScheduleListSelect';
import OXButtonStar from '../../CommonComponents/RightSideItems/Game/OXGame/OXButtonStar';
import UserSelfCamRight from '../../CommonComponents/RightSideItems/User/UserSelfCamRight';
// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function StarOXGame() {
  return (
    <BackgroundDiv>
      <StarChosungScreen></StarChosungScreen>
      <ScheduleListSelect></ScheduleListSelect>
      <OXButtonStar></OXButtonStar>
      <UserSelfCamRight></UserSelfCamRight>
    </BackgroundDiv>
  );
}
