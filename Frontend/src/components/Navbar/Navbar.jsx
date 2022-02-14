import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarWrapper,
  CenterMenu,
  NavbarMain,
  LeftMenu,
  RightMenu,
  DrawerListRow,
  NavbarSubBlock,
  SubMenu,
  MenuBlock,
} from './Navbar.style';
import logo from '../../assets/images/yourstar_logo.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { MdMenu } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { MY_PAGE_REQUEST } from '../../store/modules/mypage';
import {
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  SET_MENU,
} from '../../store/modules/member';

export default function Navbar() {
  const dispatch = useDispatch();
  const { logInDone, menu } = useSelector(state => state.member);
  const { me } = useSelector(state => state.mypage); // 0: 비로그인, 4: 스타, 3:사용자, 2: 관계자 ,1:관리자
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 만약 토큰이 남아 있다면 or 새로고침 되었을 때 동작하도록 해야함
    if (!logInDone && sessionStorage.length > 0) {
      dispatch({
        type: MY_PAGE_REQUEST,
      });
      dispatch({ type: LOG_IN_SUCCESS });
    }
  }, [dispatch, logInDone]);

  const LogoutButton = () => {
    dispatch({ type: LOG_OUT_REQUEST, data: { memberId: me.memberId } });
  };
  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    )
      return;
    setOpen(open);
  };
  const changeMenu = m => {
    dispatch({ type: SET_MENU, data: m });
  };
  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <DrawerListRow>
          <p className="name">반갑습니다 {me.name}님</p>
        </DrawerListRow>
        {(me.code === 2 || me.code === 4) && (
          <DrawerListRow onClick={() => changeMenu('signup')}>
            <Link to="/apply" className="color">
              contact
            </Link>
          </DrawerListRow>
        )}
        {me.code === 1 && (
          <DrawerListRow onClick={() => changeMenu('admin')}>
            <Link to="/admin" className="color">
              management
            </Link>
          </DrawerListRow>
        )}

        <DrawerListRow onClick={() => changeMenu('schedule')}>
          <Link to="/schedule" className="color">
            meeting
          </Link>
        </DrawerListRow>
        <DrawerListRow onClick={() => changeMenu('faq')}>
          <Link to="/faq" className="color">
            FAQ
          </Link>
        </DrawerListRow>

        {me.code === 0 ? (
          <>
            <DrawerListRow onClick={() => changeMenu('login')}>
              <Link to="/login" className="color">
                Login
              </Link>
            </DrawerListRow>
            <DrawerListRow onClick={() => changeMenu('signup')}>
              <Link to="/signup" className="color">
                signup
              </Link>
            </DrawerListRow>
          </>
        ) : (
          <>
            <DrawerListRow onClick={() => changeMenu('mypage')}>
              <Link to="/mypage" className="color">
                mypage
              </Link>
            </DrawerListRow>
            <DrawerListRow onClick={() => changeMenu('main')}>
              <label className="color">Logout</label>
            </DrawerListRow>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <NavbarWrapper>
      <NavbarMain>
        <LeftMenu>
          <MdMenu id="drawer" onClick={toggleDrawer(true)} />
          <React.Fragment key={'left'}>
            <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </React.Fragment>
        </LeftMenu>
        <CenterMenu>
          <Link to="/">
            <img src={logo} alt="yourstar" onClick={() => changeMenu('main')} />
          </Link>
        </CenterMenu>
        {me.code !== 0 && <RightMenu></RightMenu>}
        {me.code === 0 && <RightMenu />}
      </NavbarMain>
      <NavbarSubBlock>
        <SubMenu>
          <ul>
            {(me.code === 2 || me.code === 4) && (
              <MenuBlock
                onClick={() => changeMenu('apply')}
                check={menu === 'apply' ? '1' : '0'}
              >
                <Link to="/apply">Contact</Link>
              </MenuBlock>
            )}
            {me.code === 1 && (
              <MenuBlock
                onClick={() => changeMenu('admin')}
                check={menu === 'admin' ? '1' : '0'}
              >
                <Link to="/admin">Management</Link>
              </MenuBlock>
            )}
            <MenuBlock
              onClick={() => {
                changeMenu('schedule');
              }}
              check={menu === 'schedule' ? '1' : '0'}
            >
              <Link to="/schedule">Meeting</Link>
            </MenuBlock>
            <MenuBlock
              onClick={() => changeMenu('faq')}
              check={menu === 'faq' ? '1' : '0'}
            >
              <Link to="/faq">FAQ</Link>
            </MenuBlock>
            {me.code === 0 ? (
              <>
                <MenuBlock
                  onClick={() => changeMenu('login')}
                  check={menu === 'login' ? '1' : '0'}
                >
                  <Link to="/login">Login</Link>
                </MenuBlock>
                <MenuBlock
                  onClick={() => changeMenu('signup')}
                  check={menu === 'signup' ? '1' : '0'}
                >
                  <Link to="/signup">Signup</Link>
                </MenuBlock>
              </>
            ) : (
              <>
                <MenuBlock
                  onClick={() => changeMenu('mypage')}
                  check={menu === 'mypage' ? '1' : '0'}
                >
                  <Link to="/mypage">Mypage</Link>
                </MenuBlock>
                <MenuBlock
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    changeMenu('main');
                    LogoutButton();
                  }}
                >
                  Logout
                </MenuBlock>
              </>
            )}
          </ul>
        </SubMenu>
      </NavbarSubBlock>
    </NavbarWrapper>
  );
}
