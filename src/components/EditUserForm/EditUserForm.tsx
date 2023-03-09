import React from 'react';
import UserForm from '../UserForm';
import styles from './styles.module.scss';
import icons from '../../assets/icons.svg';
import { useAppDispatch } from '../../hooks/redux';
import { updateUser } from '../../redux/asyncActions/users';
import { UserDto } from '../../models/User/UserDto';

interface Props {
  close: () => void;
  userId: string;
}

const EditUserForm = ({ close, userId }: Props) => {
  const dispatch = useAppDispatch();

  const editUser = (data: UserDto) => {
    dispatch(updateUser({ id: userId, ...data }));
    close();
  };

  return (
    <div className={styles.formWrapper}>
      <UserForm submitData={editUser} />
      <svg className={styles.closeButton} onClick={close}>
        <use xlinkHref={`${icons}#cross`} />
      </svg>
    </div>
  );
};

export default EditUserForm;
