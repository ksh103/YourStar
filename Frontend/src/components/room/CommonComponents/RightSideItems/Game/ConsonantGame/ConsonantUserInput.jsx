import React from 'react';
import {
  HalfSideDiv2,
  SmallBox,
  SmallChattingInputBox,
  SmallChattingListBox,
} from '../../Chatting/Chatting.style';

export default function ConsonantUserInput() {
  return (
    <>
      <HalfSideDiv2>
        <SmallBox>유저 입력창</SmallBox>
        <SmallChattingListBox> ㄱ ㅎ ㅇ ㄹ ㄴ</SmallChattingListBox>
        <SmallChattingInputBox></SmallChattingInputBox>
      </HalfSideDiv2>
    </>
  );
}
