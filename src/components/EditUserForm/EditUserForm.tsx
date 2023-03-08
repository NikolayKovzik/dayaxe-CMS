import React from 'react';
import UserForm from '../UserForm';
import styles from './styles.module.scss';
import { UserFormItems } from '../UserForm/models';
import icons from '../../assets/icons.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUsers } from '../../redux/store/selectors';
import { updateUser } from '../../redux/asyncActions/users';

interface Props {
  close: () => void;
  userId: string;
}

const EditUserForm = ({ close, userId }: Props) => {
  const { loading, error } = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const editUser = (data: UserFormItems) => {
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
