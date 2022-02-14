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
  RoomEunSeong,
  RoomSumin,
  AdminMeetingDetail,
  Login,
  MypageDetail,
  RoomJisul,
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
          <Route exact path="/" component={Main} />
          <PrivateRoute exact path="/login" component={Login} code={[0]} />
          <PrivateRoute exact path="/signup" component={Signup} code={[0]} />
          <Route exact path="/faq" component={FAQ} />
          <PrivateRoute exact path="/apply" component={Apply} code={[2, 4]} />
          <PrivateRoute
            exact
            path="/admin/:id"
            component={AdminMeetingDetail}
            code={[1]}
          />
          <PrivateRoute exact path="/admin" component={Admin} code={[1]} />
          <Route exact path="/schedule/:id" component={ScheduleDetail} />
          <Route exact path="/schedule" component={Schedule} />
          {/* 0 빼고 다 */}
          <Route exact path="/mypage" component={Mypage} code={[1, 2, 3, 4]} />
          <Route
            exact
            path="/find/password"
            component={FindPassword}
            code={[0]}
          />
          <Route exact path="/pay" component={Pay} />
          <Route exact path="/room/:id" component={Room} />
          <Route path="/mypage/:id" component={MypageDetail} />
          <Route path="/pledge/:id">
            <Pledge />
          </Route>
          <Route path="/stanby/:id">
            <Stanby />
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
          <Route path="/Jisul">
            <RoomJisul />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
