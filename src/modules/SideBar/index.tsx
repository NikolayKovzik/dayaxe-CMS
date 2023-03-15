import React from 'react';
import NavBar from './components/NavBar';
import styles from './styles/styles.module.scss';
import navBarItems from './utils/navBarItems';

const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <NavBar items={navBarItems} />
    </aside>
  );
};

export default SideBar;
