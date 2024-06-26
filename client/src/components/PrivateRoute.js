// components/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, role, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists
  const userRole = localStorage.getItem('role');

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Check role
  if (role && userRole !== role) {
    return <Navigate to={userRole === 'teacher' ? "/teacher-home" : "/student-home"} />;
  }

  // Render component if authenticated and authorized
  return <Component {...rest} />;
};

export default PrivateRoute;
