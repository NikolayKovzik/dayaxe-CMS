import React from 'react';
import { Navigate } from 'react-router-dom';
import RoutesList from '../../routes/routes';

const NotFound = () => {
  return <Navigate to={RoutesList.DEFAULT} />;
};

export default NotFound;
