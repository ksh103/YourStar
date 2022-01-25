import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarWrapper,
  CenterMenu,
  NavbarMain,
  LeftMenu,
  RightMenu,
} from './Navbar.style';
import logo from './yourstar_logo.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import NavbarSub from './NavbarSub';
import { MdMenu, MdStar, MdPerson, MdManageAccounts } from 'react-icons/md';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const name = '지수민님';
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
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Link to="login">Login</Link>
        </ListItem>
        <ListItem>
          <Link to="login">meeting</Link>
        </ListItem>
        <ListItem>
          <Link to="login">FAQ</Link>
        </ListItem>
        <ListItem>
          <Link to="login">contact</Link>
        </ListItem>
        <ListItem>
          <Link to="login">mypage</Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <NavbarWrapper>
      {/* 메인 메뉴  */}
      <NavbarMain>
        <Grid xs={3}>
          <LeftMenu>
            <MdMenu onClick={toggleDrawer(true)} />
            <React.Fragment key={'left'}>
              <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
                {list()}
              </Drawer>
            </React.Fragment>
          </LeftMenu>
        </Grid>
        <Grid xs={6}>
          <CenterMenu>
            <Link to="/">
              <img src={logo} alt="yourstar" />
            </Link>
          </CenterMenu>
        </Grid>
        <Grid xs={3}>
          <RightMenu>
            <MdStar />
            {name}
          </RightMenu>
        </Grid>
      </NavbarMain>

      {/* 서브 메뉴 */}
      <NavbarSub />
    </NavbarWrapper>
  );
}
