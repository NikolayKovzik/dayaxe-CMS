import React, { PropsWithChildren } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import styles from './styles.module.scss';
import { LoginUserDto, RegisterUserDto, UserDto } from '../../models/User/UserDto';

interface Props {
  name: Path<UserDto | RegisterUserDto | LoginUserDto>;
  register: UseFormRegister<UserDto | RegisterUserDto | LoginUserDto>;
  section: string;
}

const SectionCheckboxes = ({ section, name, register }: PropsWithChildren<Props>) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>{section}:</h2>
      <div className={styles.inputsContainer}>
        <div className={styles.inputWrapper}>
          <input id={'create' + name} type="checkbox" value={'create'} {...register(name)} />
          <label className={styles.label} htmlFor={'create' + name}>
            Create
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <input id={'read' + name} type="checkbox" value={'read'} {...register(name)} />
          <label className={styles.label} htmlFor={'read' + name}>
            Read
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <input id={'update' + name} type="checkbox" value={'update'} {...register(name)} />
          <label className={styles.label} htmlFor={'update' + name}>
            Update
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <input id={'delete' + name} type="checkbox" value={'delete'} {...register(name)} />
          <label className={styles.label} htmlFor={'delete' + name}>
            Delete
          </label>
        </div>
      </div>
    </div>
  );
};

export default SectionCheckboxes;
