import React from 'react';
import QnAList from './QnAList';
import StarQnA from './StarQnA';
import UserQnA from './UserQnA';
import { useSelector } from 'react-redux';

export default function QnA() {
  const { me } = useSelector(state => state.mypage);
  // 일반유저 === 0 , 스타 1
  if (me.code === 3) {
    return <UserQnA></UserQnA>; // qna list 동작하게 해주기
  } else {
    return <StarQnA></StarQnA>;
  }
}
