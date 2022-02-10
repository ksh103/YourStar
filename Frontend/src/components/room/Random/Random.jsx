import React from 'react';
import { useSelector } from 'react-redux';
import StarRandom from './StarRandom';
import UserRandom from './UserRandom';

export default function Random() {
  const { me } = useSelector(state => state.mypage);
  // 일반유저 === 3 , 스타 4
  if (me.code === 4) {
    return <StarRandom></StarRandom>;
  } else {
    return <UserRandom></UserRandom>;
  }
}
