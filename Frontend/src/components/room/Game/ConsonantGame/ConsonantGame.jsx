import React from 'react';
import { useSelector } from 'react-redux';
import StarConsonantGame from './StarConsonantGame';
import UserConsonantGameStart from './UserConsonantGameStart';

export default function ConsonantGame() {
  const { userId } = useSelector(state => ({
    userId: state.MeetingRoom.userId,
  }));
  // 일반유저 === 0 , 스타 1
  if (userId === 1) {
    return <StarConsonantGame></StarConsonantGame>;
  } else {
    return <UserConsonantGameStart></UserConsonantGameStart>;
  }
}
