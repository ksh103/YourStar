import React from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginSignupBlock } from '../Login/Login.style';

import { FiveGrid, SevenGrid, LoginGrid } from '../Login/DividGrid';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#e57373',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

// import Box from '@mui/material/Box';
// import { innerDiv } from './Login.style';
// import FormHelperText from '@mui/material/FormHelperText';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function Login() {
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
    <LoginSignupBlock>
      <LoginGrid></LoginGrid>
    </LoginSignupBlock>
  );
}
