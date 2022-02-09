import React from 'react';
import styled from 'styled-components';
import StarChosungScreen from '../../CommonComponents/MainItems/Game/StarChosungScreen';
import ScheduleListSelect from '../../CommonComponents/RightSideItems/Star/ScheduleListSelect';
import UserSelfCamRight from '../../CommonComponents/RightSideItems/User/UserSelfCamRight';
import ConsonantStarInput from '../../CommonComponents/RightSideItems/Game/ConsonantGame/ConsonantStarInput';
import { BackgroundDiv } from '../../styles/roomGlobal';
// 포지션작업

export default function StarConsonantGame() {
  return (
    <BackgroundDiv>
      <StarChosungScreen></StarChosungScreen>
      <ScheduleListSelect></ScheduleListSelect>
      <ConsonantStarInput></ConsonantStarInput>
      <UserSelfCamRight></UserSelfCamRight>
    </BackgroundDiv>
  );
}
