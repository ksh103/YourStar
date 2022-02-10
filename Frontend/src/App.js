import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import {
  Admin,
  Apply,
  FAQ,
  Main,
  Mypage,
  Room,
  Schedule,
  Signup,
  ScheduleDetail,
  FindPassword,
  RoomDongJun,
  RoomEunSeong,
  RoomSumin,
  AdminMeetingDetail,
  Login,
  MypageDetail,
  RoomJisul,
  RoomYoungWon,
  RoomSohyun,
  Pledge,
  Stanby,
} from './pages/index';
import GlobalStyle from './styles/global';
import Pay from './components/Pay/Pay';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/apply">
            <Apply />
          </Route>
          <Route exact path="/admin/:id">
            <AdminMeetingDetail />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/schedule/:id">
            <ScheduleDetail />
          </Route>
          <Route exact path="/schedule">
            <Schedule />
          </Route>
          <Route exact path="/mypage">
            <Mypage />
          </Route>
          <Route exact path="/find/password">
            <FindPassword />
          </Route>
          <Route exact component={Pay} path="/pay" />
          <Route exact component={Room} path="/room/:id" />
          <Route path="/mypage/:id">
            <MypageDetail />
          </Route>
          <Route path="/pledge/:id">
            <Pledge />
          </Route>
          <Route path="/stanby/:id">
            <Stanby />
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
          <Route path="/Sohyun">
            <RoomSohyun />
          </Route>
          <Route path="/YoungWon">
            <RoomYoungWon />
          </Route>
          <Route path="/Jisul">
            <RoomJisul />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
