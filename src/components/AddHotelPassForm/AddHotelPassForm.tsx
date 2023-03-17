import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { HotelPassFormData } from '../../models/HotelPass/HotelPassDto';
import HotelPassForm from '../HotelPassForm';
import { createHotelPass } from '../../redux/asyncActions/hotel-passes';

interface Props {
  close: () => void;
}

const AddHotelPassForm = ({ close }: Props) => {
  const dispatch = useAppDispatch();

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HotelPassFormData>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<HotelPassFormData> = (data: HotelPassFormData) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result);
      dispatch(createHotelPass({ ...data, image: result }));
    };

    reader.readAsDataURL(data.image[0]);

    close();
    reset();
  };

  return (
    <div className={styles.formWrapper}>
      <HotelPassForm<HotelPassFormData>
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        watch={watch}
      />
    </div>
  );
};

export default AddHotelPassForm;
