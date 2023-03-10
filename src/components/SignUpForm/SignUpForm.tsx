import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { Access, Modules, UserDto } from '../../models/User/UserDto';
import validation from '../../constants/user-validation';
import usePasswordVisibility from '../../hooks/usePasswordVisibility';
import Input from '../../UI/Input';
import Eye from '../../UI/Eye';
import Button from '../../UI/Button';
import { useAppDispatch } from '../../hooks/redux';
import { createUser } from '../../redux/asyncActions/users';


const SignUpForm = () => {
  const { password, email } = validation;
  const { isVisible, toggle } = usePasswordVisibility();

  const dispatch = useAppDispatch();

  const defaultValues = {
    access: Object.values(Modules).reduce((acc, cur) => {
      acc[cur] = [];
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
      <form className={styles.form}>
        <Input
          name={'email'}
          label={'Email'}
          register={register}
          options={{
            required: email.required,
            pattern: { value: email.pattern, message: email.message },
          }}
          errors={errors}
        />
        <Input
          name={'password'}
          label={'Password'}
          register={register}
          options={{
            required: password.required,
            minLength: { value: 4, message: password.message },
          }}
          errors={errors}
          isVisible={isVisible}
        >
          <Eye handleClick={toggle} />
        </Input>
        <div onClick={handleSubmit(onSubmit)} className={styles.button}>
          <Button inverted={false} padding={'20px 30px'}>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
