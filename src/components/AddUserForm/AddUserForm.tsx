import React from 'react';
import styles from './styles.module.scss';
import UserForm from '../UserForm';
import { UserFormItems } from '../UserForm/models';

interface Props {
  close: () => void;
}

const AddUserForm = ({ close }: Props) => {
  const addUser = (data: UserFormItems) => {
    console.log(data);
    close();
  };

  return (
    <div className={styles.formWrapper}>
      <UserForm submitData={addUser} />
    </div>
  );
};

export default AddUserForm;
