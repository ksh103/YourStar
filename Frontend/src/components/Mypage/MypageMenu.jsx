import React from 'react';
import { MypageMenuWrapper } from './Mypage.style';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../../store/modules/mypage';
export default function MypageMenu() {
  const dispatch = useDispatch();
  const { me, menu } = useSelector(state => state.mypage);
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
            <li onClick={() => toggleMenu(1)}>
              {menu === 1 ? (
                <div style={{ color: 'red' }}>나의 팬미팅</div>
              ) : (
                <div>나의 팬미팅</div>
              )}
            </li>
            <li onClick={() => toggleMenu(2)}>
              {menu === 2 ? (
                <div style={{ color: 'red' }}>추억 보관함</div>
              ) : (
                <div>추억 보관함</div>
              )}
            </li>
          </div>
        )}
      </ul>
    </MypageMenuWrapper>
  );
}