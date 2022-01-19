import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './pages/index';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
