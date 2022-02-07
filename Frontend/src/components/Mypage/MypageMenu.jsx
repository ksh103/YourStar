import React from 'react';
import { MypageMenuWrapper } from './Mypage.style';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../../store/modules/mypage';

export default function MypageMenu() {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.mypage);

  const toggleMenu = menu => {
    dispatch(setMenu(menu));
  };

  return (
    <MypageMenuWrapper>
      <ul>
        {me.code === 2 && (
          <div>
            <li>팬미팅 목록</li>
          </div>
        )}
        {me.code === 3 && (
          <div>
            <li onClick={() => toggleMenu(1)}>나의 팬미팅</li>
            <li onClick={() => toggleMenu(2)}>추억 보관함</li>
          </div>
        )}
      </ul>
    </MypageMenuWrapper>
  );
}
