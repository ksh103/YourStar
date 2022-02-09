import { createTheme } from '@mui/material';

// mui 폰트 적용
export const theme = createTheme({
  typography: {
    fontFamily: 'MinSans-Medium',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'MinSans-Medium';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/MinSans-Medium.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        `,
    },
  },
});
