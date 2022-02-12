import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// 0: 비회원, 1: 관리자, 2: 관계자, 3: 일반회원, 4: 스타
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { me } = useSelector(state => state.mypage);
  return (
    <Route
      {...rest}
      render={props => {
        console.log(rest.code);
        return rest.code.includes(me.code) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};
export default PrivateRoute;
