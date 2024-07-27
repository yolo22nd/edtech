import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user, loading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !loading ? (
          user ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Redirect to="/" />
          )
        ) : (
          <div>Loading...</div>
        )
      }
    />
  );
};

export default PrivateRoute;