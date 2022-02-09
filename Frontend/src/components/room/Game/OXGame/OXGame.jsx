import React from 'react';
import { useSelector } from 'react-redux';
import StarOXGame from './StarOXGame';
import UserOXGame from './UserOXGame';

export default function OXGame() {
  const { me } = useSelector(state => state.mypage);

  // 일반유저 === 0 , 스타 1
  if (me.code === 4) {
    return <StarOXGame></StarOXGame>;
  } else {
    return <UserOXGame></UserOXGame>;
  }
}
