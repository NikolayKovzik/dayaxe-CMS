import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { HotelFormData } from '../../models/Hotels/HotelDto';
import HotelForm from '../HotelForm';
import { createHotel } from '../../redux/asyncActions/hotels';

interface Props {
  close: () => void;
}

const AddHotelForm = ({ close }: Props) => {
  const dispatch = useAppDispatch();

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HotelFormData>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<HotelFormData> = (data: HotelFormData) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result);
      dispatch(createHotel({ image: result }));
    };

    reader.readAsDataURL(data.image[0]);

    close();
    reset();
  };

  return (
    <div className={styles.formWrapper}>
      <HotelForm<HotelFormData>
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        watch={watch}
      />
    </div>
  );
};

export default AddHotelForm;
