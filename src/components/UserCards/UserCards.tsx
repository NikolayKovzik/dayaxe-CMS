import React, { useMemo } from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from '../../hooks/redux';
import { selectUsers } from '../../redux/store/selectors';
import Button from '../../UI/Button';

const UserCards = () => {
  const { users } = useAppSelector(selectUsers);

  const userCards = useMemo(
    () =>
      users.map((user) => (
        <li key={user.email} className={styles.card}>
          {Object.entries(user).map(([key, value]) => (
            <div key={key} className={styles.cardItem}>
              <span className={styles.itemKey}>{key}:</span>
              <span className={styles.itemValue}>{value}</span>
            </div>
          ))}
          <div className={styles.buttons}>
            <div className={styles.button}>
              <Button inverted={true} padding={'8px 15px'}>
                Edit
              </Button>
            </div>
            <div className={styles.button}>
              <Button inverted={true} padding={'8px 15px'}>
                Delete
              </Button>
            </div>
          </div>
        </li>
      )),
    [users],
  );

  return <ul className={styles.cards}>{userCards}</ul>;
};

export default UserCards;
