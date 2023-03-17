import React, { useState } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister, UseFormWatch } from 'react-hook-form';
import styles from './styles.module.scss';
import FormError from '../../UI/FormError';
import Button from '../../UI/Button';
import validation from '../../constants/hotel-passes-validation';
import Input from '../../UI/Input';

interface Props<T extends FieldValues> {
  watch: UseFormWatch<T>;
  register: UseFormRegister<T>;
  onSubmit: () => void;
  errors: FieldErrors;
  defaultImage?: string;
}

function HotelPassForm<T extends FieldValues>({
  onSubmit,
  register,
  watch,
  errors,
  defaultImage,
}: Props<T>) {
  const [image, setImage] = useState(defaultImage || '');

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

  const fileInputOptions = image ? {} : { required: validation.image.required };

  return (
    <form className={styles.form}>
      <Input
        name={'type' as Path<T>}
        label={'Type'}
        register={register}
        options={{
          required: validation.type.required,
          pattern: {
            value: validation.type.pattern.value,
            message: validation.type.pattern.message,
          },
        }}
        errors={errors}
      />
      <Input
        name={'title' as Path<T>}
        label={'Title'}
        register={register}
        options={{
          required: validation.title.required,
        }}
        errors={errors}
      />
      <Input
        name={'passType' as Path<T>}
        label={'Pass Type'}
        register={register}
        options={{
          required: validation.passType.required,
        }}
        errors={errors}
      />
      <Input
        name={'location' as Path<T>}
        label={'Location'}
        register={register}
        options={{
          required: validation.location.required,
        }}
        errors={errors}
      />
      <Input
        name={'ratingPercentage' as Path<T>}
        label={'Rating Percentage'}
        register={register}
        options={{
          required: validation.ratingPercentage.required,
          max: {
            value: validation.ratingPercentage.max.value,
            message: validation.ratingPercentage.max.message,
          },
          min: {
            value: validation.ratingPercentage.min.value,
            message: validation.ratingPercentage.min.message,
          },
        }}
        errors={errors}
        isNumber={true}
      />
      <Input
        name={'ratingAmount' as Path<T>}
        label={'Rating Amount'}
        register={register}
        options={{
          required: validation.ratingAmount.required,
        }}
        errors={errors}
        isNumber={true}
      />
      <Input
        name={'price' as Path<T>}
        label={'Price'}
        register={register}
        options={{
          required: validation.price.required,
        }}
        errors={errors}
        isNumber={true}
      />
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
          {...register('image' as Path<T>, fileInputOptions)}
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

export default HotelPassForm;
