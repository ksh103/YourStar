import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarSubBlock, SubMenu } from './Navbar.style';

export default function NavbarSub() {
  const role = 2; // 0: 비로그인 ,1:사용자, 2: 스타 ,3:관리자
  return (
    <NavbarSubBlock>
      <SubMenu>
        <ul>
          {role === 2 && (
            <li>
              <Link to="/apply">Contact</Link>
            </li>
          )}
          {role === 3 && (
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
          {role === 0 ? (
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
              <li>Logout</li>
            </>
          )}
          <li></li>
        </ul>
      </SubMenu>
    </NavbarSubBlock>
  );
}
