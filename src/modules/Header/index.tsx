import React from 'react';
import styles from './styles.module.scss';
import Button from '../../UI/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authActions } from '../../redux/slices/auth';
import { selectAuth } from '../../redux/store/selectors';

const Header = () => {
  const { user } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Dayaxe CMS</div>
      <nav className={styles.nav}>
        <span className={styles.username}>{user && user.username}</span>
        <div onClick={() => dispatch(authActions.logout())} className={styles.logoutButton}>
          <Button padding={'20px 30px'} inverted={false}>
            Logout
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
