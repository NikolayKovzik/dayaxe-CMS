import React from 'react';
import UserForm from '../UserForm';
import styles from './styles.module.scss';
import { UserFormItems } from '../UserForm/models';
import icons from '../../assets/icons.svg';

interface Props {
  close: () => void;
  userId: string;
}

const EditUserForm = ({ close, userId }: Props) => {
  const updateUser = (data: UserFormItems) => {
    console.log(userId);
    console.log(data);
  };

  return (
    <div className={styles.formWrapper}>
      <UserForm submitData={updateUser} />
      <svg className={styles.closeButton} onClick={close}>
        <use xlinkHref={`${icons}#cross`} />
      </svg>
    </div>
  );
};

export default EditUserForm;
