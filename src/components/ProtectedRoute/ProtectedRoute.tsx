import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import RoutesList from '../../routes/routes';
import { useAppSelector } from '../../hooks/redux';
import { selectAuth } from '../../redux/store/selectors';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isAuthorized } = useAppSelector(selectAuth);

  if (!isAuthorized) {
    return <Navigate to={RoutesList.SIGN_IN} />;
  }

  return children;
};

export default ProtectedRoute;
