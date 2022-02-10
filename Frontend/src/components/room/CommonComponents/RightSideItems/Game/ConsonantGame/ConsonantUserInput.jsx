import React from 'react';
import {
  HalfSideDiv2,
  SmallBox,
  SmallChattingInputBox,
  SmallChattingListBox,
} from '../../Chatting/Chatting.style';
import { useSelector, useDispatch } from 'react-redux';

export default function ConsonantUserInput() {
  const { chosonantQuiz, storeSession } = useSelector(state => ({
    chosonantQuiz: state.MeetingRoom.chosonantQuiz,
    storeSession: state.MeetingRoom.storeSession,
  }));
  return (
    <>
      <HalfSideDiv2>
        <SmallBox>유저 입력창</SmallBox>
        <SmallChattingListBox>
          {chosonantQuiz && chosonantQuiz}
        </SmallChattingListBox>
        <SmallChattingInputBox></SmallChattingInputBox>
      </HalfSideDiv2>
    </>
  );
}
