import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { meeting } = useSelector(state => state.meeting);
  return (
    <Route
      {...rest}
      render={props =>
        meeting.isReserve ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default PrivateRoute;
