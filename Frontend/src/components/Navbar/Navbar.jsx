import React, { useState } from 'react';
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
import ListItem from '@mui/material/ListItem';
import NavbarSub from './NavbarSub';
import { MdMenu, MdStar, MdPerson, MdManageAccounts } from 'react-icons/md';
export default function Navbar() {
  const role = 3;
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
          <p className="name">반갑습니다 지수민님</p>
        </DrawerListRow>
        {role === 2 && (
          <DrawerListRow>
            <Link to="/apply" className="color">
              contact
            </Link>
          </DrawerListRow>
        )}
        {role === 3 && (
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

        {role === 0 ? (
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
        <RightMenu>
          <div id="name">지수민님</div>
        </RightMenu>
      </NavbarMain>
      <NavbarSub />
    </NavbarWrapper>
  );
}
