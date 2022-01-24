import React from 'react';
import { Block } from '../../styles/variables.js';
import Grid from '@mui/material/Grid';
import winter from './윈터.jfif';
import { MypageProfileImgDiv, MypageProfileImgTag } from './Mypage.style';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    <Block>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          xs={12}
          container
          direction="column"
          justifyContent="between"
          alignItems="center"
          sx={{
            width: '90%',
            color: 'black',
            marginTop: '50px',
          }}
        >
          {/* 동그란 사진, 정보수정버튼, 이름, 닉네임, email, 가입일 */}
          <Grid>
            <MypageProfileImgDiv>
              <MypageProfileImgTag src={winter}></MypageProfileImgTag>
            </MypageProfileImgDiv>
            <ThemeProvider theme={theme}>
              <Button
                xs={12}
                variant="contained"
                sx={{
                  width: '70%',
                  height: '50px',
                }}
              >
                Login
              </Button>
            </ThemeProvider>
          </Grid>
          <h5 style={{ marginTop: '2px', marginBottom: '2px' }}>이름</h5>
          <h5 style={{ marginTop: '2px', marginBottom: '2px' }}>닉네임</h5>
          <p style={{ marginTop: '2px', marginBottom: '2px' }}>이메일</p>
          <p style={{ marginTop: '2px', marginBottom: '2px' }}>가입일 </p>
        </Grid>

        <Grid
          xs={12}
          sx={{
            width: '90%',
            color: 'black',
          }}
        >
          여기가 제 2 그리드 2개로 분리 나의 미팅내역, 추억보관함
        </Grid>
      </Grid>
    </Block>
  );
}
