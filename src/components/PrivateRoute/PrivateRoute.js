import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LoginContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loginData, setLoginData] = useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loginData.isSignIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;