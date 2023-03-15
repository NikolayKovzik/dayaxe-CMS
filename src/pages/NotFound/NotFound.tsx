import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <span>Page Not Found</span>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default NotFound;
