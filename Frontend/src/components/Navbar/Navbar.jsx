import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CenterMenu,
  NavbarWrapper,
  LeftMenu,
  RightMenu,
  GridBlock,
} from './Navbar.style';
import logo from './yourstar_logo.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  let role = 1;
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
    <div>
      <NavbarWrapper>
        <GridBlock xs={4}>
          <LeftMenu>
            <div onClick={toggleDrawer(true)}>⬜</div>
            <React.Fragment key={'left'}>
              <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
                {list()}
              </Drawer>
            </React.Fragment>
          </LeftMenu>
        </GridBlock>
        <GridBlock xs={4}>
          <CenterMenu>
            <Link to="/">
              <img src={logo} alt="yourstar" />
            </Link>
          </CenterMenu>
        </GridBlock>
        <GridBlock xs={4}>
          <RightMenu>
            <ul>
              {role === 0 ? (
                <li>
                  <Link to="login">Login</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="mypage">🧞‍♂️ 지수민 님</Link>
                  </li>
                  <li>
                    <div>Logout</div>
                  </li>
                </>
              )}

              <li>
                <Link to="faq">FAQ</Link>
              </li>
              <li>
                <Link to="schedule">Meeting</Link>
              </li>
              {role === 2 && (
                <li>
                  <Link to="Apply">contact</Link>
                </li>
              )}
              {role === 3 && (
                <li>
                  <Link to="Admin">Management</Link>
                </li>
              )}
            </ul>
          </RightMenu>
        </GridBlock>
      </NavbarWrapper>
    </div>
  );
}
