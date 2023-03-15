import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import icons from '../../assets/icons.svg';
import { useAppDispatch } from '../../hooks/redux';
import { updateUser } from '../../redux/asyncActions/users';
import { UserDto } from '../../models/User/UserDto';
import { User } from '../../models/User/User';
import UserForm from '../UserForm';
import { UserAttributes } from '../../models/User/UserAttributes';

interface Props {
  close: () => void;
  user: User;
}

const EditUserForm = ({ close, user }: Props) => {
  const dispatch = useAppDispatch();
  const { _id, ...defaultValues } = user;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserDto>({
    mode: 'all',
    defaultValues,
  });


  const onSubmit: SubmitHandler<UserDto> = (data: UserDto) => {
    dispatch(updateUser({ id: user._id, ...data } as UserAttributes));
    close();
    reset();
  };

  return (
    <div className={styles.formWrapper}>
      <UserForm<UserDto> onSubmit={handleSubmit(onSubmit)} errors={errors} register={register} />
      <svg className={styles.closeButton} onClick={close}>
        <use xlinkHref={`${icons}#cross`} />
      </svg>
    </div>
  );
};

export default EditUserForm;
