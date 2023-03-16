import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { HotelDto } from '../../models/Hotels/HotelDto';
import HotelForm from '../HotelForm';
import { createHotel, updateHotel } from '../../redux/asyncActions/hotels';
import { Hotel } from '../../models/Hotels/Hotel';
import icons from '../../assets/icons.svg';

interface Props {
  close: () => void;
  hotel: Hotel;
}

const EditHotelForm = ({ close, hotel }: Props) => {
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
    dispatch(updateHotel({ id: hotel._id, image: data.image }));
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
      <svg className={styles.closeButton} onClick={close}>
        <use xlinkHref={`${icons}#cross`} />
      </svg>
    </div>
  );
};

export default EditHotelForm;
