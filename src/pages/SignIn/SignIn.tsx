import React from 'react';
import { NavLink } from 'react-router-dom';
import SignInForm from '../../components/SignInForm';
import RoutesList from '../../routes';
import styles from './styles.module.scss';

const SignIn = () => {
  return <section className={styles.signInSection}>
    <div className={styles.header}>
      <h1 className={styles.title}>Sign In</h1>
      <p className={styles.signUp}>
        Don`t have an account yet? then&nbsp;&nbsp;<NavLink to={RoutesList.SIGN_UP} className={styles.signUpLink}>Sign Up</NavLink>
      </p>
    </div>
    <div className={styles.formContainer}>
      <SignInForm />
    </div>
  </section>;
};

export default SignIn;
