import React from 'react';
import { Button, createTheme } from '@mui/material';
import { pointColor } from '../../styles/variables';
import { ThemeProvider } from 'styled-components';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5455',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function SubmitButton(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          sx={{
            width: '5%',
            height: '5%',
            position: 'absolute',
            top: '85vh',
            left: '74.5vw',
          }}
        >
          {props.name}
        </Button>
      </ThemeProvider>
    </div>
  );
}
