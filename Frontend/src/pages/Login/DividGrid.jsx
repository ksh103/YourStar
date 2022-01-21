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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const DatePick = function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <FormControl sx={{ width: '105%', marginY: '5px' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} xs={{ width: '100%' }}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

const RadioBox = function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl
      sx={{
        width: '70%',
        marginLeft: '35px',
      }}
    >
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
};

// main color , second color ui 지정용 theme
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
      <h1 style={{ marginBottom: '75px', color: '#2b8cc8', fontSize: '75px' }}>
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
      <h1
        style={{
          marginBottom: '20px',
          marginTop: '0px',
          color: '#2b8cc8',
          fontSize: '75px',
        }}
      >
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
            xs={{
              width: '70%',
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
            <DatePick></DatePick>
          </Grid>
          <Grid xs={3}>
            {/* 인증버튼 */}
            <RadioBox></RadioBox>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            width: '70%',
            height: '50px',
            marginBottom: '75px',
          }}
        >
          회원가입
        </Button>
      </ThemeProvider>
    </Grid>
  );
}

export default {
  SevenGrid,
  LoginGrid,
  SignupSevenGrid,
  RadioBox,
};
