import React from 'react';
import { useSelector } from 'react-redux';
import StarRandom from './StarRandom';
import UserRandom from './UserRandom';

export default function Random() {
  const { userId } = useSelector(state => ({
    userId: state.MeetingRoom.userId,
  }));
  // 일반유저 === 0 , 스타 1
  if (userId === 1) {
    return <StarRandom></StarRandom>;
  } else {
    return <UserRandom></UserRandom>;
  }
}
