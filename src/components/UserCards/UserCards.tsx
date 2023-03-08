import React, { useEffect, useMemo } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUsers } from '../../redux/store/selectors';
import UserCard from '../UserCard';
import { getAllUsers } from '../../redux/asyncActions/users';

const UserCards = () => {
  const { users, loading, error } = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const userCards = useMemo(
    () => users.map((user) => <UserCard key={user._id} {...user} />),
    [users],
  );

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <ul className={styles.cards}>{userCards}</ul>
    </>
  );
};

export default UserCards;
