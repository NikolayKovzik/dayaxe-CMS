import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Header from '../../modules/Header';
import SideBar from '../../modules/SideBar';
import styles from './styles.module.scss';
import { useAppSelector } from '../../hooks/redux';
import { selectAuth } from '../../redux/store/selectors';
import RoutesList from '../../routes/routes';

const ProtectedLayout = () => {
  const { isAuthorized } = useAppSelector(selectAuth);
  const location = useLocation();

  if (!isAuthorized) {
    return <Navigate to={RoutesList.SIGN_IN} replace state={{ from: location }} />;
  }

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ProtectedLayout;
