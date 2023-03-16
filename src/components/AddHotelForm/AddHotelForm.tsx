import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { HotelDto } from '../../models/Hotels/HotelDto';
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
  } = useForm<HotelDto>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<HotelDto> = (data: HotelDto) => {
    dispatch(createHotel({ image: data.image }));
    close();
    reset();
  };

  return (
    <div className={styles.formWrapper}>
      <HotelForm<HotelDto>
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        watch={watch}
      />
    </div>
  );
};

export default AddHotelForm;
