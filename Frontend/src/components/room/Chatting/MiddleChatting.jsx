import React from 'react';
import {
  MiddleChattingBox,
  MiddleChattingInputBox,
  MiddleChattingListBox,
  ThridSideDiv1,
  ThridSideDiv2,
  ThridSideDiv3,
} from './Chatting.style';
import { WaitingTimeWrapper } from '../OneonOneMeeting/Stanby/OneonOneStanby.style';

export default function MiddleChatting() {
  return (
    <>
      {/* <ThridSideDiv1>
        <WaitingTimeWrapper></WaitingTimeWrapper>
      </ThridSideDiv1>
      <ThridSideDiv2>
        <MiddleChattingBox>
          <MiddleChattingListBox></MiddleChattingListBox>
          <MiddleChattingInputBox></MiddleChattingInputBox>
        </MiddleChattingBox>
      </ThridSideDiv2>
      <ThridSideDiv3>
        <WaitingTimeWrapper></WaitingTimeWrapper>
      </ThridSideDiv3> */}
      <ThridSideDiv2>
        <MiddleChattingBox>
          <MiddleChattingListBox></MiddleChattingListBox>
          <MiddleChattingInputBox></MiddleChattingInputBox>
        </MiddleChattingBox>
      </ThridSideDiv2>
    </>
  );
}
