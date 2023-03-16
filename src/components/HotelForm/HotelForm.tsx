import React, { useState } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister, UseFormWatch } from 'react-hook-form';
import styles from './styles.module.scss';
import FormError from '../../UI/FormError';
import Button from '../../UI/Button';
import validation from '../../constants/user-validation';

interface Props<T extends FieldValues> {
  watch: UseFormWatch<T>;
  register: UseFormRegister<T>;
  onSubmit: () => void;
  errors: FieldErrors;
}

function HotelForm<T extends FieldValues>({ onSubmit, register, watch, errors }: Props<T>) {
  const [image, setImage] = useState('');

  const convertToBase64 = (fileList: FileList) => {
    const image = fileList[0];
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result);
      setImage(result);
    };

    reader.readAsDataURL(image);
  };

  const watcher = watch('image' as Path<T>);
  watcher && watcher.length && convertToBase64(watcher);

  return (
    <form className={styles.form}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt="image" />
        </div>
      )}
      <div className={styles.inputWrapper}>
        <label className={styles.label} htmlFor={'image'}>
          Choose image
        </label>
        <input
          type={'file'}
          accept={'image/*'}
          id={'image'}
          {...register('image' as Path<T>, { required: validation.image.required })}
          className={styles.input}
        />
        <FormError errors={errors} name={'image'} />
      </div>
      <div onClick={onSubmit} className={styles.button}>
        <Button inverted={false} padding={'20px 30px'}>
          Save
        </Button>
      </div>
    </form>
  );
}

export default HotelForm;
