import React from 'react';
import styles from './styles.module.scss';
import UserForm from '../UserForm';
import { useAppDispatch } from '../../hooks/redux';
import { createUser } from '../../redux/asyncActions/users';
import { UserDto } from '../../models/User/UserDto';

interface Props {
  close: () => void;
}

const AddUserForm = ({ close }: Props) => {
  const dispatch = useAppDispatch();

  const addUser = (data: UserDto) => {
    dispatch(createUser(data));
    close();
  };

  return (
    <div className={styles.formWrapper}>
      <UserForm submitData={addUser} />
    </div>
  );
};

export default AddUserForm;
