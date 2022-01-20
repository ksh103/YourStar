import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Logo,
  NavbarWrapper,
  LeftMenu,
  RightMenu,
  GridBlock,
} from './Navbar.style';
import logo from './yourstar_logo.png';
import Grid from '@mui/material/Grid';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  let role = 'unlogin';
  let isOpen = false;
  const openMenu = () => {
    setOpen(true);
  };
  return (
    <div>
      <NavbarWrapper>
        <GridBlock xs={4}>
          <LeftMenu onClick={openMenu}>햄버거아이콘</LeftMenu>
        </GridBlock>
        <GridBlock xs={4}>
          <Logo>
            <img src={logo} alt="yourstar" />
          </Logo>
        </GridBlock>
        <GridBlock xs={4}>
          <RightMenu>각종 메뉴</RightMenu>
        </GridBlock>
      </NavbarWrapper>

      {/* mobile 일때 보이는 메뉴창 */}
      {/* <ul>
        <li>
          <Link to="/">
            <div>
              <img src={yourstar_logo} alt="yourstar" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="login">로그인</Link>
        </li>
        <li>
          <Link to="signup">회원가입</Link>
        </li>
        <li>
          <Link to="faq">FAQ</Link>
        </li>
        <li>
          <Link to="schedule">일정</Link>
        </li>
        <li>
          <Link to="apply">미팅신청</Link>
        </li>
        <li>
          <Link to="admin">미팅관리</Link>
        </li>
        <li>
          <Link to="mypage">마이페이지</Link>
        </li>
      </ul> */}
    </div>
  );
}
