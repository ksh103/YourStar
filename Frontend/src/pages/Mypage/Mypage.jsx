import React from 'react';
import { Block } from '../../styles/variables.js';
import Grid from '@mui/material/Grid';
import winter from './윈터.jfif';
import {
  MypageProfileImgDiv,
  MypageProfileImgTag,
  WhiteBlock,
  ProfileTextDiv,
} from './Mypage.style';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LabTabs from './MypageTab.jsx';
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#FF5455',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function Mypage() {
  return (
    <Block style={{ paddingTop: '25px' }}>
      {/* 상단 프로필 */}
      <WhiteBlock>
        <Grid container>
          <Grid xs></Grid>
          <Grid xs={7} sx={{ color: 'black' }}>
            <MypageProfileImgDiv>
              <MypageProfileImgTag src={winter}></MypageProfileImgTag>
            </MypageProfileImgDiv>
            <ProfileTextDiv>
              <h1>윈터 님</h1>
              <h3>User Id : winter</h3>
              <h2>UserEmail: winter@smtown.com</h2>
              <h3>JoinDate : 22.01.23</h3>
            </ProfileTextDiv>
          </Grid>
          <Grid xs>
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                sx={{
                  width: '70%',
                  height: '50px',
                  position: 'relative',
                  top: '50px',
                  borderRadius: '20px',
                  boxShadow: '1px 1px 1px',
                }}
              >
                회원정보 수정
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </WhiteBlock>

      {/* 하단 내용삽입 */}
      <div style={{ width: '90%', margin: 'auto' }}>
        <LabTabs></LabTabs>
      </div>
    </Block>
  );
}
