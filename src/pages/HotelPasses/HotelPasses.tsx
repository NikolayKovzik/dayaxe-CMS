import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import styles from './styles.module.scss';
import useModal from '../../hooks/useModal';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectHotelPasses } from '../../redux/store/selectors';
import Button from '../../UI/Button';
import Modal from '../../components/Modal';
import { hotelPassesActions } from '../../redux/slices/hotel-passes';
import HotelPassCards from '../../components/HotelPassCards';
import AddHotelPassForm from '../../components/AddHotelPassForm';

const HotelPasses = () => {
  const { isShown, toggle } = useModal();
  const { error, success } = useAppSelector(selectHotelPasses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (success) {
      toast.success('Success !', {
        position: toast.POSITION.TOP_RIGHT,
        onOpen: () => {
          dispatch(hotelPassesActions.resetSuccess());
        }
      });
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
        onOpen: () => {
          dispatch(hotelPassesActions.resetError());
        }
      });
    }
  }, [error]);

  return (
    <div className={styles.hotelPasses}>
      <div onClick={toggle} className={styles.addHotelPassButton}>
        <Button inverted={false} padding={'20px 30px'}>
          Add New Hotel Pass
        </Button>
      </div>
      <Modal isShown={isShown} hide={toggle} modalContent={<AddHotelPassForm close={toggle}/>} />
      <HotelPassCards />
    </div>
  );
};

export default HotelPasses;
