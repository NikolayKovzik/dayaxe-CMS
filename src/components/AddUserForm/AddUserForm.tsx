import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { createUser } from '../../redux/asyncActions/users';
import { Access, Modules, UserDto } from '../../models/User/UserDto';
import UserForm from '../UserForm';

interface Props {
  close: () => void;
}

const AddUserForm = ({ close }: Props) => {
  const dispatch = useAppDispatch();

  const defaultValues = {
    access: Object.values(Modules).reduce((acc, cur) => {
      acc[cur] = ['read'];
      return acc;
    }, {} as Access),
  };

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
    dispatch(createUser(data));
    close();
    reset();
  };

  return (
    <div className={styles.formWrapper}>
      <UserForm<UserDto> onSubmit={handleSubmit(onSubmit)} errors={errors} register={register} />
    </div>
  );
};

export default AddUserForm;
