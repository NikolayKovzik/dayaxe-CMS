import React from 'react';
import styles from './styles.module.scss';
import UserForm from '../../components/UserForm';
import Button from '../../UI/Button';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modal';
import UserCards from '../../components/UserCards';
import AddUserForm from '../../components/AddUserForm';

const Users = () => {
  const { isShown, toggle } = useModal();

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
