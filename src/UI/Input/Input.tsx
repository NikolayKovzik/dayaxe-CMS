import React, { PropsWithChildren } from 'react';
import { FieldErrors, Path, UseFormRegister, RegisterOptions } from 'react-hook-form';
import styles from './styles.module.scss';
import FormError from '../FormError';
import { LoginUserDto, RegisterUserDto, UserDto } from '../../models/User/UserDto';

interface Props {
  name: Path<UserDto | RegisterUserDto | LoginUserDto>;
  register: UseFormRegister<UserDto | RegisterUserDto | LoginUserDto>;
  options?: RegisterOptions;
  label: string;
  isVisible?: boolean;
  errors: FieldErrors;
}

const Input = ({
  name,
  register,
  options = {},
  label,
  isVisible = true,
  errors,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        {...register(name, options)}
        type={isVisible ? 'text' : 'password'}
        className={styles.input}
      />
      {children}
      <FormError errors={errors} name={name} />
    </div>
  );
};

export default Input;
