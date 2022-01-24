import Grid from '@mui/material/Grid';
import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  MypageProfileImgDiv,
  MypageProfileImgTag,
  WhiteBlock,
  ProfileTextDiv,
  ScheduleWrapper,
  ScheduleBlock,
  InFormBlock,
} from './Mypage.style';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#2b8cc8',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function InformChange() {
  return (
    <ScheduleWrapper>
      <InFormBlock>
        <Grid
          style={{
            color: 'black',
          }}
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1
            style={{
              marginBottom: '50px',
              marginTop: '75px',
              color: '#2b8cc8',
            }}
          >
            회원정보 수정
          </h1>
          <ThemeProvider theme={theme}>
            {/*  */}
            <Grid
              xs={12}
              container
              direction="row"
              justifyContent="between"
              alignItems="center"
              sx={{
                width: '70%',
              }}
            >
              <Grid xs={9}>
                <FormControl sx={{ width: '105%', marginY: '5px' }}>
                  <TextField label="Phone Number" />
                </FormControl>
              </Grid>
              <Grid xs={3}>
                {/* 인증버튼 */}
                <Button
                  variant="contained"
                  sx={{
                    width: '70%',
                    height: '50px',
                    marginLeft: '35px',
                  }}
                >
                  인증
                </Button>
              </Grid>
            </Grid>
            <FormControl sx={{ width: '70%', marginY: '10px' }}>
              <TextField
                type="password"
                label="Password"
                sx={{
                  width: '100%',
                  marginTop: '5px',
                }}
              />
            </FormControl>
            <FormControl sx={{ width: '70%', marginY: '10px' }}>
              <TextField
                type="password"
                label="Password Check"
                xs={{
                  width: '70%',
                  marginTop: '5px',
                }}
              />
            </FormControl>
            <FormControl sx={{ width: '70%', marginY: '10px' }}>
              <TextField
                label="NickName"
                xs={{
                  width: '70%',
                  marginTop: '5px',
                }}
              />
            </FormControl>
            <Grid
              xs={12}
              container
              direction="row"
              justifyContent="between"
              alignItems="center"
              sx={{
                width: '70%',
              }}
            >
              <Grid xs={9}>
                <FormControl sx={{ width: '105%', marginY: '5px' }}>
                  <TextField label="Adress" />
                </FormControl>
              </Grid>
              <Grid xs={3}>
                {/* 인증버튼 */}
                <Button
                  variant="contained"
                  sx={{
                    width: '70%',
                    height: '50px',
                    marginLeft: '35px',
                  }}
                >
                  검색
                </Button>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              sx={{
                width: '70%',
                height: '50px',
                marginBottom: '75px',
                marginTop: '50px',
              }}
            >
              정보 수정
            </Button>
          </ThemeProvider>
        </Grid>
      </InFormBlock>
    </ScheduleWrapper>
  );
}
