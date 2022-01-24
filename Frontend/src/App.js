import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {
  Admin,
  Apply,
  FAQ,
  Main,
  Mypage,
  Room,
  Schedule,
  Signup,
  Detail,
} from './pages/index';
import Login from './pages/Login/Login';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/apply">
            <Apply />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/mypage">
            <Mypage />
          </Route>
          <Route path="/room/:id">
            <Room />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
