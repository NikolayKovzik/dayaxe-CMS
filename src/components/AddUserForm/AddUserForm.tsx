import React from 'react';
import styles from './styles.module.scss';
import UserForm from '../UserForm';
import { UserFormItems } from '../UserForm/models';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUsers } from '../../redux/store/selectors';
import { createUser } from '../../redux/asyncActions/users';

interface Props {
  close: () => void;
}

const AddUserForm = ({ close }: Props) => {
  const dispatch = useAppDispatch();

  const addUser = (data: UserFormItems) => {
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
