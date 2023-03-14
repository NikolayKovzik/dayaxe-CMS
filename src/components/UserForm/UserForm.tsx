import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from './styles.module.scss';
import { LoginUserDto, Modules, RegisterUserDto, UserDto } from '../../models/User/UserDto';
import validation from '../../constants/user-validation';
import usePasswordVisibility from '../../hooks/usePasswordVisibility';
import SectionCheckboxes from '../SectionCheckboxes';
import Input from '../../UI/Input';
import Eye from '../../UI/Eye';
import Button from '../../UI/Button';

interface Props {
  onSubmit: () => void;
  register: UseFormRegister<UserDto | RegisterUserDto | LoginUserDto>;
  errors: FieldErrors;
}

const UserForm = ({ onSubmit, register, errors }: Props) => {
  const { username, password, email } = validation;
  const { isVisible, toggle } = usePasswordVisibility();

  const sectionPermissions = Object.values(Modules).map((section, index) => (
    <SectionCheckboxes
      key={index}
      section={section}
      name={`access.${section}`}
      register={register}
    />
  ));

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <Input
          name={'username'}
          label={'Username'}
          register={register}
          options={{
            required: username.required,
            minLength: { value: 3, message: username.message },
          }}
          errors={errors}
        />
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
        {sectionPermissions}
        <div onClick={onSubmit} className={styles.button}>
          <Button inverted={false} padding={'20px 30px'}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
