import Grid from '@mui/material/Grid';
import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const maincolor = red[300];
// main color , second color ui 지정용 theme
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

export function LoginGrid() {
  return (
    <Grid
      container
      style={{
        height: '100%',
      }}
    >
      <SevenGrid></SevenGrid>
    </Grid>
  );
}

export function SevenGrid() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Grid
      style={{
        color: 'black',
      }}
      item
      xs={12}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        my: 'auto',
      }}
    >
      <h1 style={{ marginBottom: '75px', color: '#e57373', fontSize: '75px' }}>
        Login
      </h1>
      <h3>당신만의 스타를 만나러가세요</h3>
      <FormControl sx={{ m: 1, width: '70%', my: '10' }} variant="outlined">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
      <FormControl sx={{ m: 1, width: '70%' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              {/* <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton> */}
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          marginTop: '25px',
        }}
      >
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
        <Grid
          xs={12}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{
            marginBottom: '150px',
          }}
        >
          <h3>아직 회원이 아니신가요?</h3>
          <button>회원가입</button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export function SignupSevenGrid() {
  const maincolor = red[300];
  return (
    <Grid
      style={{
        color: 'black',
      }}
      item
      xs={12}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        my: 'auto',
      }}
    >
      <h1 style={{ marginBottom: '75px', color: '#e57373', fontSize: '75px' }}>
        Sign-Up
      </h1>
      <h3>우리의 만남을 준비 해 볼까요?</h3>
      {/* 이름, 전화번호-버튼, 이메일-버튼,비밀번호,비밀번호확인, 닉네임, 주소검색, 생년월일-성별*/}

      {/* 우선 각 컴포 위치 지정 */}

      <ThemeProvider theme={theme}>
        <FormControl sx={{ width: '70%', marginY: '10px' }}>
          <TextField
            label="Name"
            xs={{
              width: '70%',
              marginTop: '5px',
            }}
          />
        </FormControl>
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
            <FormControl sx={{ width: '100%', marginY: '5px' }}>
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
              }}
            >
              인증
            </Button>
          </Grid>
        </Grid>
        <div>비밀번호</div>
        <div>비밀번호확인</div>
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
            <FormControl sx={{ width: '100%', marginY: '5px' }}>
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
              }}
            >
              검색
            </Button>
          </Grid>
        </Grid>
        <div>생년월일</div>
      </ThemeProvider>
    </Grid>
  );
}

export default { SevenGrid, LoginGrid, SignupSevenGrid };
