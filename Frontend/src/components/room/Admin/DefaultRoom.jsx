import React from 'react';
import AdminGrid from './AdminGrid';
import Admin from './Admin';
import UserBasic from '../UserBasic/UserBasic';
import { useSelector } from 'react-redux';

export default function DefaultRoom() {
  const { userId } = useSelector(state => ({
    userId: state.MeetingRoom.userId,
  }));
  // 일반유저 === 0 , 스타 1
  if (userId === 1) {
    return <Admin></Admin>;
  } else {
    return <UserBasic></UserBasic>;
  }
}
