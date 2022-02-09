import React from 'react';
import { useSelector } from 'react-redux';
import StarOXGame from './StarOXGame';
import UserOXGame from './UserOXGame';

export default function OXGame() {
  const { userId } = useSelector(state => ({
    userId: state.MeetingRoom.userId,
  }));
  // 일반유저 === 0 , 스타 1
  if (userId === 1) {
    return <StarOXGame></StarOXGame>;
  } else {
    return <UserOXGame></UserOXGame>;
  }
}
