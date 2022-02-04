import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './App';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Router history={store.customHistory}>
    <Provider store={store.store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
