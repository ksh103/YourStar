import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarWrapper,
  CenterMenu,
  NavbarMain,
  LeftMenu,
  RightMenu,
  DrawerListRow,
} from './Navbar.style';
import logo from '../../assets/images/yourstar_logo.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import NavbarSub from './NavbarSub';
import { MdMenu, MdStar, MdPerson, MdManageAccounts } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { MY_PAGE_REQUEST } from '../../store/modules/mypage';
import { LOG_IN_SUCCESS } from '../../store/modules/member';
export default function Navbar() {
  const dispatch = useDispatch();
  const { logInDone } = useSelector(state => state.member);

  useEffect(() => {
    // 만약 토큰이 남아 있다면 or 새로고침 되었을 때 동작하도록 해야함
    if (!logInDone && sessionStorage.length > 0) {
      dispatch({
        type: MY_PAGE_REQUEST,
      });
      dispatch({ type: LOG_IN_SUCCESS });
    }
  }, []);

  const { me } = useSelector(state => state.mypage); // 0: 비로그인, 4: 스타, 3:사용자, 2: 관계자 ,1:관리자
  const [open, setOpen] = useState(false);
  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    )
      return;
    setOpen(open);
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
          <DrawerListRow>
            <Link to="/apply" className="color">
              contact
            </Link>
          </DrawerListRow>
        )}
        {me.code === 1 && (
          <DrawerListRow>
            <Link to="/admin" className="color">
              management
            </Link>
          </DrawerListRow>
        )}

        <DrawerListRow>
          <Link to="/schedule" className="color">
            meeting
          </Link>
        </DrawerListRow>
        <DrawerListRow>
          <Link to="/faq" className="color">
            FAQ
          </Link>
        </DrawerListRow>

        {me.code === 0 ? (
          <>
            <DrawerListRow>
              <Link to="/login" className="color">
                Login
              </Link>
            </DrawerListRow>
            <DrawerListRow>
              <Link to="/signup" className="color">
                signup
              </Link>
            </DrawerListRow>
          </>
        ) : (
          <>
            <DrawerListRow>
              <Link to="/mypage" className="color">
                mypage
              </Link>
            </DrawerListRow>
            <DrawerListRow>
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
            <img src={logo} alt="yourstar" />
          </Link>
        </CenterMenu>
        {me.code !== 0 && (
          <RightMenu>
            <div id="name">{me.name}님</div>
          </RightMenu>
        )}
        {me.code === 0 && <RightMenu />}
      </NavbarMain>
      <NavbarSub />
    </NavbarWrapper>
  );
}
