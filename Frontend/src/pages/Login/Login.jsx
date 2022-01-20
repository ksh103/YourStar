import React from 'react';
import { Block } from '../../styles/variables';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import { innerDiv } from './Login.style';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import LoginImage from "../Login/LOGIN_IMAGE.jpg"
import {ImgTag} from "../Login/Login.style"

export default function Login() {
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


  return (
  <Block>
    <Grid
      container
      style={{
        height : "100%"
      }}
      >
      <Grid 
        style={{
          color:"black",
        }} 
        item xs={7} 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ 
          my: "auto",
          marginRight: "40"
        }}
        >
        <h1 style={{color : 'black'}}>회원가입</h1>

        <TextField fullWidth sx={{ m: 1 }} id="outlined-basic" label="Outlined" variant="outlined" />

        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
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
        <Stack direction="row" spacing={3} style={{justifyContent: "center"}} >
          <Button variant="contained" color="success" >
            Login
          </Button>
        </Stack>
      </Grid>

      
      <Grid style={{color:"black"}} item xs={5}>
        <ImgTag src={LoginImage} alt='#'/>
      </Grid>
    </Grid>
  </Block>)
}
