import React from 'react';
import MiddleChatting from '../../CommonComponents/RightSideItems/Chatting/MiddleChatting';
import {
  OneonOneDisplayBox,
  StanbyBox,
  WaitingTimeWrapper,
} from './OneonOneStanby.style';
import {
  ThridSideDiv1,
  ThridSideDiv3,
} from '../../CommonComponents/RightSideItems/Chatting/Chatting.style';

export default function OneonOneStanby() {
  return (
    <>
      <StanbyBox>
        <OneonOneDisplayBox></OneonOneDisplayBox>
      </StanbyBox>
      <ThridSideDiv1>
        <WaitingTimeWrapper></WaitingTimeWrapper>
      </ThridSideDiv1>
      <MiddleChatting></MiddleChatting>
      <ThridSideDiv3>
        <WaitingTimeWrapper></WaitingTimeWrapper>
      </ThridSideDiv3>
    </>
  );
}
