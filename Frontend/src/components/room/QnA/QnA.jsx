import React from 'react';
import QnAList from './QnAList';
import StarQnA from './StarQnA';
import UserQnA from './UserQnA';
import { useSelector } from 'react-redux';

export default function QnA() {
  const { userId } = useSelector(state => ({
    userId: state.MeetingRoom.userId,
  }));
  // 일반유저 === 0 , 스타 1
  if (userId === 1) {
    return <StarQnA></StarQnA>; // qna list 동작하게 해주기
  } else {
    return <UserQnA></UserQnA>;
  }
}
