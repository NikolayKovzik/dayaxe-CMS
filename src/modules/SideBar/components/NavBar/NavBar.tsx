import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { NavBarProps } from './models';

const NavBar = ({ items }: NavBarProps) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        {items.map((item) => {
          return (
            <li className={styles.menuItem} key={item.link}>
              <NavLink
                to={item.link}
                className={({ isActive }: { isActive: boolean }) =>
                  isActive ? `${styles.menuLink} ${styles.menuLink_active}` : styles.menuLink
                }
              >
                {item.content}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
