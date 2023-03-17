import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import styles from './styles.module.scss';
import Button from '../../UI/Button';
import Modal from '../../components/Modal';
import useModal from '../../hooks/useModal';
import HotelCards from '../../components/HotelCards';
import AddHotelForm from '../../components/AddHotelForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectHotels } from '../../redux/store/selectors';
import { hotelsActions } from '../../redux/slices/hotels';

const Hotels = () => {
  const { isShown, toggle } = useModal();
  const { error, success } = useAppSelector(selectHotels);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (success) {
      toast.success('Success !', {
        position: toast.POSITION.TOP_RIGHT,
        onOpen: () => {
          dispatch(hotelsActions.resetSuccess());
        },
      });
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
        onOpen: () => {
          dispatch(hotelsActions.resetError());
        },
      });
    }
  }, [error]);

  return (
    <div className={styles.hotels}>
      <div onClick={toggle} className={styles.addHotelButton}>
        <Button inverted={false} padding={'20px 30px'}>
          Add New Hotel
        </Button>
      </div>
      <Modal isShown={isShown} hide={toggle} modalContent={<AddHotelForm close={toggle} />} />
      <HotelCards />
    </div>
  );
};

export default Hotels;
