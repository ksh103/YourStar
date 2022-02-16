import React from 'react';
import StarQnA from './StarQnA';
import UserQnA from './UserQnA';
import { useSelector } from 'react-redux';

export default function QnA() {
  const { me } = useSelector(state => state.mypage);

  if (me.code === 3) {
    return <UserQnA></UserQnA>; // qna list 동작하게 해주기
  } else {
    return <StarQnA></StarQnA>;
  }
}
