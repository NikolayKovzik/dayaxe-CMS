import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import icons from '../../assets/icons.svg';
import HotelPassForm from '../HotelPassForm';
import { HotelPassFormData } from '../../models/HotelPass/HotelPassDto';
import { HotelPass } from '../../models/HotelPass/HotelPass';
import { dataUrlToBlob } from '../../utils/fileHelpers';
import { updateHotelPass } from '../../redux/asyncActions/hotel-passes';

interface Props {
  close: () => void;
  hotelPass: HotelPass;
}

const EditHotelPassForm = ({ close, hotelPass }: Props) => {
  const dispatch = useAppDispatch();
  const { _id, image, ...defaultValues } = hotelPass;

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HotelPassFormData>({
    mode: 'all',
    defaultValues: { ...defaultValues },
  });

  const onSubmit: SubmitHandler<HotelPassFormData> = (data: HotelPassFormData) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result);
      dispatch(
        updateHotelPass({
          id: hotelPass._id,
          ...data,
          image: result,
        }),
      );
    };

    reader.readAsDataURL(data.image.length ? data.image[0] : dataUrlToBlob(image));

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
        defaultImage={image}
      />
      <svg className={styles.closeButton} onClick={close}>
        <use xlinkHref={`${icons}#cross`} />
      </svg>
    </div>
  );
};

export default EditHotelPassForm;
