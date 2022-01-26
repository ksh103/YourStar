import React from 'react';
import {
  SmallBox,
  SmallChattingInputBox,
  SmallChattingListBox,
  HalfSideDiv1,
  HalfSideDiv2,
} from './Chatting.style';
export default function SmallChating() {
  return (
    <>
      <HalfSideDiv1>
        <SmallBox>
          <SmallChattingInputBox></SmallChattingInputBox>
        </SmallBox>
      </HalfSideDiv1>
      <HalfSideDiv2>
        <SmallBox>
          <SmallChattingListBox>asdasd</SmallChattingListBox>
          <SmallChattingInputBox></SmallChattingInputBox>
        </SmallBox>
      </HalfSideDiv2>
    </>
  );
}
