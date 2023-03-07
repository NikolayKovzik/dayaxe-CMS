import React, { forwardRef, PropsWithChildren, SyntheticEvent } from 'react';
import { FieldErrors } from 'react-hook-form';
import styles from './styles.module.scss';
import FormError from '../FormError';

interface Props {
  name: string;
  label: string;
  isVisible?: boolean;
  errors: FieldErrors;
  onChange: (e: SyntheticEvent) => void;
  onBlur: (e: SyntheticEvent) => void;
}

const Input = forwardRef<HTMLInputElement, PropsWithChildren<Props>>(
  (
    { name, label, isVisible = true, errors, children, onChange, onBlur }: PropsWithChildren<Props>,
    ref,
  ) => {
    return (
      <div className={styles.inputWrapper}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        <input
          id={name}
          type={isVisible ? 'text' : 'password'}
          className={styles.input}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
        {children}
        <FormError errors={errors} name={name} />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
