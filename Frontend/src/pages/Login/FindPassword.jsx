import React from 'react';
import { InFormBlock, ScheduleWrapper } from '../Login/Login.style';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// main color , second color ui 지정용 theme
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#FF5455',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#808080',
    },
  },
});

const secondtheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#808080',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#808080',
    },
  },
});

export default function FindPassword() {
  return (
    <ScheduleWrapper>
      <InFormBlock>
        <Grid
          // style={{
          //   color: 'black',
          // }}
          // item
          xs={12}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid xs={12}>
            <h1
              style={{
                marginBottom: '100px',
                marginTop: '150px',
                color: '#FF5455',
                fontSize: '60px',
              }}
            >
              비밀번호 찾기
            </h1>
          </Grid>
          {/* 이름, 이메일 인증 */}

          <ThemeProvider theme={secondtheme}>
            <FormControl sx={{ width: '70%', marginY: '10px', color: 'gray' }}>
              <TextField
                label="Name"
                xs={{
                  width: '70%',
                  marginTop: '5px',
                }}
              />
            </FormControl>
          </ThemeProvider>

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
            <ThemeProvider theme={secondtheme}>
              <Grid xs={9}>
                <FormControl sx={{ width: '105%', marginY: '5px' }}>
                  <TextField label="email" />
                </FormControl>
              </Grid>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
          </Grid>
        </Grid>
      </InFormBlock>
    </ScheduleWrapper>
  );
}
