import Grid from '@mui/material/Grid';
import React from 'react';
import {ImgTag} from "../Login/Login.style"
import LoginImage from "../Login/LOGIN_IMAGE.jpg"
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#e57373",
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export function ParentGrid () {

  return(
    <Grid
      container
      style={{
        height : "100%"
      }}
      >
    </Grid>
  )
}

export function SevenGrid () {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return(
    <Grid 
      style={{
        color:"black",
      }} 
      item xs={7} 
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        my: "auto",

      }}
      >
      <h1 style={{ marginBottom: "30px" , color:"#e57373"  }}>Login</h1>
  
  <h1 style={{color : 'black'}}>Your Star</h1>
  <h3>당신만의 스타를 만나러가세요</h3>
  <FormControl sx={{ m: 1, width : "70%" , my : "10"}} variant="outlined">
    <TextField  id="outlined-basic" label="Outlined" variant="outlined" />
  </FormControl>
  <FormControl sx={{ m: 1, width : "70%" }} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">
      Password
    </InputLabel>
    <OutlinedInput
      id="outlined-adornment-password"
      type={values.showPassword ? "text" : "password"}
      value={values.password}
      onChange={handleChange("password")}
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
    
    item xs={12} 
    container
    direction="row"
    justifyContent="space-evenly"
    alignItems="center"
    sx={{
      marginTop : "25px"
    }}
  >
    <ThemeProvider theme={theme}>
      <Button
        xs={12}
        variant="contained"
        
        sx={{
          width : "70%",
          height : "50px",
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
      >
      <h3>아직 회원이 아니신가요?</h3>
      <button>회원가입</button>
    </Grid>
  </Grid>



    </Grid>
  )
}

export function FiveGrid () {

  return(
    <Grid style={{color:"black"}} item xs={5}>
      <ImgTag src={LoginImage} alt='#'/>
    </Grid>
  )
}

export default  { FiveGrid,SevenGrid,ParentGrid }