import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './App';
import configureStore from './store';
import { ThemeProvider } from '@mui/material';
import { theme } from './utils/config';
const store = configureStore();

ReactDOM.render(
  <Router history={store.customHistory}>
    <ThemeProvider theme={theme}>
      <Provider store={store.store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
