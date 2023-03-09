import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../modules/Header';
import SideBar from '../../modules/SideBar';
import styles from './styles.module.scss';

const Layout = () => {
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

export default Layout;
