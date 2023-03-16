import React from 'react';
import styles from './styles.module.scss';
import Button from '../../UI/Button';
import Modal from '../../components/Modal';
import useModal from '../../hooks/useModal';
import HotelCards from '../../components/HotelCards';
import AddHotelForm from '../../components/AddHotelForm';

const Hotels = () => {
  const { isShown, toggle } = useModal();

  return (
    <div className={styles.hotels}>
      <div onClick={toggle} className={styles.addHotelButton}>
        <Button inverted={false} padding={'20px 30px'}>
          Add New Hotel
        </Button>
      </div>
      <Modal isShown={isShown} hide={toggle} modalContent={<AddHotelForm close={toggle}/>} />
      <HotelCards />
    </div>
  );
};

export default Hotels;
