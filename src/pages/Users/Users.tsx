import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import styles from './styles.module.scss';
import Button from '../../UI/Button';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modal';
import UserCards from '../../components/UserCards';
import AddUserForm from '../../components/AddUserForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUsers } from '../../redux/store/selectors';
import { usersActions } from '../../redux/slices/users';

const Users = () => {
  const { isShown, toggle } = useModal();
  const { error, success } = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (success) {
      toast.success('Success !', {
        position: toast.POSITION.TOP_RIGHT,
        onOpen: () => {
          dispatch(usersActions.resetSuccess());
        }
      });
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
        onOpen: () => {
          dispatch(usersActions.resetError());
        }
      });
    }
  }, [error]);

  return (
    <div className={styles.users}>
      <div onClick={toggle} className={styles.addUserButton}>
        <Button inverted={false} padding={'20px 30px'}>
          Add New User
        </Button>
      </div>
      <Modal isShown={isShown} hide={toggle} modalContent={<AddUserForm close={toggle} />} />
      <UserCards />
    </div>
  );
};

export default Users;
