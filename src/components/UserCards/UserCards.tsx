import React, { useEffect, useMemo } from 'react';
import styles from './styles.module.scss';
import UserCard from '../UserCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUsers } from '../../redux/store/selectors';
import { getAllUsers } from '../../redux/asyncActions/users';
import Loader from '../../UI/Loader';

const UserCards = () => {
  const { users, loading } = useAppSelector(selectUsers);
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
      {loading && <Loader />}
      <ul className={styles.cards}>{userCards}</ul>
    </>
  );
};

export default UserCards;
