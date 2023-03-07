import React from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import styles from './styles.module.scss';
import usePasswordVisibility from '../../hooks/usePasswordVisibility';
import validation from '../../constants/user-validation';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import Eye from '../../UI/Eye';
import { UserFormItems } from './models';

interface Props {
  submitData: (data: UserFormItems) => void;
}

const UserForm = ({ submitData }: Props) => {
  const { username, password, email } = validation;
  const { isVisible, toggle } = usePasswordVisibility();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormItems>({ mode: 'all' });

  const onSubmit: SubmitHandler<UserFormItems> = (data) => {
    submitData(data);
    reset();
  };

  return (
    <form className={styles.form}>
      <Controller
        control={control}
        name={'username'}
        rules={{
          required: username.required,
          minLength: { value: 3, message: username.message },
        }}
        render={({ field }) => <Input label={'Username'} {...field} errors={errors} />}
      />
      <Controller
        control={control}
        name={'email'}
        rules={{
          required: email.required,
          pattern: { value: email.pattern, message: email.message },
        }}
        render={({ field }) => <Input label={'Email'} {...field} errors={errors} />}
      />
      <Controller
        control={control}
        name={'password'}
        rules={{
          required: password.required,
          minLength: { value: 4, message: password.message },
        }}
        render={({ field }) => (
          <Input label={'Password'} {...field} errors={errors} isVisible={isVisible}>
            <Eye handleClick={toggle} />
          </Input>
        )}
      />
      <div onClick={handleSubmit(onSubmit)} className={styles.button}>
        <Button inverted={false} padding={'20px 30px'}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
