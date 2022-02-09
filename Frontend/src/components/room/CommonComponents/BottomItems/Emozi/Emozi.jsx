import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { emoziListAdd } from '../../../../../store/modules/meetingRoom';

const EmoticonsPlace = styled.div`
  /* width: 5.541vw;
  height: 8.01vh; */
  /* background-color: #ffffff; */
  cursor: pointer;
  font-size: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// 이모티콘을 클릭했을때, 이모티콘 시그널을 만들어서 보낸다.
// 스토어에 이모티콘 입력에 대한 리스트를 받아야한다.

export default function Emozi() {
  const { storeSession } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
  }));
  const { me } = useSelector(state => state.mypage);
  const dispatch = useDispatch();
  const AddEmozi = emozi => dispatch(emoziListAdd(emozi));
  const EmoziPlus = e => {
    storeSession.signal({
      data: `${me.nick},${e.target.innerText}`,
      to: [],
      type: 'emozi',
    });
    // 스토어에 이모티콘 리스트를 추가해주는 action 호출
    AddEmozi(e.target.innerText);
  };

  return (
    <>
      <EmoticonsPlace onClick={e => EmoziPlus(e)}>👍</EmoticonsPlace>
      <EmoticonsPlace onClick={e => EmoziPlus(e)}>👏</EmoticonsPlace>
      <EmoticonsPlace onClick={e => EmoziPlus(e)}>&#128150;</EmoticonsPlace>
      <EmoticonsPlace onClick={e => EmoziPlus(e)}>😍</EmoticonsPlace>
      <EmoticonsPlace onClick={e => EmoziPlus(e)}>💋</EmoticonsPlace>
      <EmoticonsPlace onClick={e => EmoziPlus(e)}>😥</EmoticonsPlace>
    </>
  );
}
