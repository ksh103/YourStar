import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';

import {
  MypageProfileImgDiv,
  MypageProfileImgTag,
  WhiteBlock,
  ProfileTextDiv,
  ScheduleWrapper,
  ScheduleBlock,
} from './Mypage.style';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LabTabs from './MypageTab.jsx';
import StarLabTabs from './StarMypageTab.jsx';
import { FaUserAstronaut } from 'react-icons/fa';
import { BsFillGearFill, BsFillStarFill } from 'react-icons/bs';

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
  const [user, setUser] = useState('관리자');

  const UserIcon = function () {
    if (user === '유저') {
      return (
        <>
          <FaUserAstronaut
            style={{
              width: '80%',
              height: '80%',
              objectFit: 'cover',
              marginTop: '5%',
              marginBottom: '5%',
            }}
          ></FaUserAstronaut>
        </>
      );
    } else if (user === '스타') {
      return (
        <>
          <BsFillStarFill
            style={{
              width: '90%',
              height: '90%',
              objectFit: 'cover',
              marginTop: '5%',
              marginBottom: '5%',
            }}
          ></BsFillStarFill>
        </>
      );
    } else if (user === '관리자') {
      return (
        <BsFillGearFill
          style={{
            width: '80%',
            height: '80%',
            objectFit: 'cover',
            marginTop: '10%',
            marginBottom: '10%',
          }}
        ></BsFillGearFill>
      );
    }
  };

  return (
    // <Block style={{ paddingTop: '25px' }}>
    <ScheduleWrapper>
      <ScheduleBlock>
        {/* 상단 프로필 */}
        <WhiteBlock>
          <Grid
            container
            sx={{
              color: 'black',
              width: '100%',
              height: '100%',
              textAlign: 'center',
            }}
          >
            <Grid xs></Grid>
            <Grid xs={7}>
              <MypageProfileImgDiv>
                {/* <MypageProfileImgTag src={BsFillGearFill}></MypageProfileImgTag> */}
                <UserIcon></UserIcon>
              </MypageProfileImgDiv>
              <ProfileTextDiv>
                <p style={{ fontSize: '2.5vh' }}>윈터 님</p>
                <p style={{ fontSize: '1.5vh' }}>User Id : winter</p>
                <p style={{ fontSize: '1.8vh' }}>
                  UserEmail: winter@smtown.com
                </p>
                <p style={{ fontSize: '1.5vh' }}>JoinDate : 22.01.23</p>
              </ProfileTextDiv>
            </Grid>
            <Grid xs>
              <ThemeProvider theme={theme}>
                <Button
                  variant="outlined"
                  sx={{
                    width: '70%',
                    height: '13%',
                    position: 'relative',
                    top: '50px',
                    borderRadius: '20px',
                    boxShadow: '1px 1px 1px',
                  }}
                >
                  <p style={{ fontSize: '100%' }}>정보 수정</p>
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>
        </WhiteBlock>

        {/* 하단 내용삽입 */}
        <div style={{ width: '90%', marginTop: '15px', margin: 'auto' }}>
          <LabTabs></LabTabs>
          <StarLabTabs></StarLabTabs>
        </div>
      </ScheduleBlock>
    </ScheduleWrapper>
  );
}
