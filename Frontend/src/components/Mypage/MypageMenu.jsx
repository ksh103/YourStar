import React from 'react';
import { MypageMenuWrapper } from './Mypage.style';

export default function MypageMenu() {
  let menu = 1;
  const toggleMemu = num => event => {
    menu = num;
  };

  return (
    <MypageMenuWrapper>
      <ul>
        <li onClick={toggleMemu(1)}>나의 팬미팅</li>
        <li onClick={toggleMemu(2)}>추억 보관함</li>
        <li onClick={toggleMemu(3)}>팬미팅 목록</li>
      </ul>
    </MypageMenuWrapper>
  );
}
