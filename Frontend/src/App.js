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
  RoomDongJun,
  RoomEunSeong,
  RoomSumin,
} from './pages/index';
import Login from './pages/Login/Login';
import GlobalStyle from './styles/global';
import InformChange from './pages/Mypage/InformChange';
import FindPassword from './pages/Login/FindPassword';

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
          <Route path="/InformChange">
            <InformChange />
          </Route>
          <Route path="/FindPW">
            <FindPassword />
          </Route>
          <Route path="/DongJun">
            <RoomDongJun />
          </Route>
          <Route path="/EunSeong">
            <RoomEunSeong />
          </Route>
          <Route path="/Sumin">
            <RoomSumin />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
