import React from 'react';
import { Block } from '../../styles/variables';
import {imgTag} from '..Login.style.js'
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
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
import { flexbox } from '@mui/system';
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
// }));





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

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  return ( 
  <Block>
    {/* 한줄을 차지할 박스 지정 */}
    <Box sx={{flexGrow: 1, justifyContent: 'center'}}>
      {/* 2개의 영역으로 나누어준다 */}
      <Grid container spacing={2}>
        <Grid item xs={7}>
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
          <Stack direction="row" spacing={3} >
            <Button variant="contained" color="success" xs={{justifyContent: "center"}}>
              Login
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={5}>
          <button>아아아</button>
        </Grid>
      </Grid>

    </Box>
    
  </Block>)
  ;
}
