import React, { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { HotelDto } from '../../models/Hotels/HotelDto';
import FormError from '../../UI/FormError';
import Button from '../../UI/Button';
import validation from '../../constants/user-validation';

interface Props {
  close: () => void;
}

const AddHotelForm = ({ close }: Props) => {
  const [image, setImage] = useState('null');
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HotelDto>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<HotelDto> = (data: HotelDto) => {
    const image = data.image[0];
    console.log(image);
    // dispatch();
    close();
    reset();
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files as FileList;
    const image = file[0];
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result);
      setImage(result);
    };

    reader.readAsDataURL(image);
  };

  return (
    <div className={styles.formWrapper}>
      <form>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor={'image'}>
            Choose image
          </label>
          <input
            type={'file'}
            accept={'image/*'}
            id={'image'}
            {...register('image', { required: validation.image.required })}
            className={styles.input}
          />
          {image && <img src={image} alt="image" />}
          <FormError errors={errors} name={'image'} />
        </div>
      </form>
      <div onClick={handleSubmit(onSubmit)} className={styles.button}>
        <Button inverted={false} padding={'20px 30px'}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddHotelForm;
