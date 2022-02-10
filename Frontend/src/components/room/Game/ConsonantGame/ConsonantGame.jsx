import React from 'react';
import { useSelector } from 'react-redux';
import StarConsonantGame from './StarConsonantGame';
import UserConsonantGameStart from './UserConsonantGameStart';

export default function ConsonantGame() {
  const { me } = useSelector(state => state.mypage);
  // 일반유저 === 0 , 스타 1
  if (me.code === 4) {
    return <StarConsonantGame></StarConsonantGame>;
  } else {
    return <UserConsonantGameStart></UserConsonantGameStart>;
  }
}
