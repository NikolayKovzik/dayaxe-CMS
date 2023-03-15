import React, { useState } from 'react';
import Button from '../../UI/Button';
import EditUserForm from '../EditUserForm';
import styles from './styles.module.scss';
import { User } from '../../models/User/User';
import { useAppDispatch } from '../../hooks/redux';
import { deleteUser } from '../../redux/asyncActions/users';

const UserCard = (user: User) => {
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useAppDispatch();

  const removeUser = (id: string) => {
    dispatch(deleteUser(id));
  };

  return (
    <li key={user._id} className={styles.card}>
      {isEditable ? (
        <EditUserForm user={user} close={() => setIsEditable(false)} />
      ) : (
        <div className={styles.cardContent}>
          <div className={styles.fields}>
            <div className={styles.cardItem}>
              <span className={styles.itemKey}>User ID:</span>
              <span className={styles.itemValue}>{user._id}</span>
            </div>
            <div className={styles.cardItem}>
              <span className={styles.itemKey}>Email:</span>
              <span className={styles.itemValue}>{user.email}</span>
            </div>
            <div className={styles.cardItem}>
              <span className={styles.itemKey}>Username:</span>
              <span className={styles.itemValue}>{user.username}</span>
            </div>
            {
              Object.entries(user.access).map(([key, value]) => {
                return (
                  <div key={key} className={styles.cardItem}>
                    <span className={styles.itemKey}>{key}:</span>
                    <span className={styles.itemValue}>{value.join(', ')}</span>
                  </div>
                );
              })
            }
          </div>
          <div className={styles.buttons}>
            <div onClick={() => setIsEditable(true)} className={styles.button}>
              <Button inverted={true} padding={'8px 15px'}>
                Edit
              </Button>
            </div>
            <div onClick={() => removeUser(user._id)} className={styles.button}>
              <Button inverted={true} padding={'8px 15px'}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default UserCard;
