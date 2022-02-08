import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarSubBlock, SubMenu } from './Navbar.style';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../../store/modules/member';

export default function NavbarSub() {
  const { me } = useSelector(state => state.mypage); // 0: 비로그인 ,4: 스타, 3:사용자, 2: 매니저 ,1:관리자
  const dispatch = useDispatch();

  const LogoutButton = () => {
    dispatch({ type: LOG_OUT_REQUEST, data: { memberId: me.memberId } });
  };
  return (
    <NavbarSubBlock>
      <SubMenu>
        <ul>
          {(me.code === 2 || me.code === 4) && (
            <li>
              <Link to="/apply">Contact</Link>
            </li>
          )}
          {me.code === 1 && (
            <li>
              <Link to="/admin">Management</Link>
            </li>
          )}
          <li>
            <Link to="/schedule">Meeting</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          {me.code === 0 ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/mypage">Mypage</Link>
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  LogoutButton();
                }}
              >
                Logout
              </li>
            </>
          )}
          <li></li>
        </ul>
      </SubMenu>
    </NavbarSubBlock>
  );
}
