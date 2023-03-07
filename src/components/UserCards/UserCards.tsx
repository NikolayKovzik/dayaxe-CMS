import React, { useMemo } from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from '../../hooks/redux';
import { selectUsers } from '../../redux/store/selectors';
import UserCard from '../UserCard';

const UserCards = () => {
  const { users } = useAppSelector(selectUsers);

  const userCards = useMemo(
    () =>
      users.map((user) => (
        <UserCard key={user._id} {...user}/>
      )),
    [users],
  );

  return <ul className={styles.cards}>{userCards}</ul>;
};

export default UserCards;
