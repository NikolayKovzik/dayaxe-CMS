import React, { useState } from 'react';
import Button from '../../UI/Button';
import EditUserForm from '../EditUserForm';
import styles from './styles.module.scss';
import { User } from '../../models/User/User';
import { useAppDispatch } from '../../hooks/redux';
import { deleteUser } from '../../redux/asyncActions/users';
import { Hotel } from '../../models/Hotels/Hotel';
import { deleteHotel } from '../../redux/asyncActions/hotels';
import EditHotelForm from '../EditHotelForm';

const HotelCard = (hotel: Hotel) => {
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useAppDispatch();

  const removeHotel = (id: string) => {
    dispatch(deleteHotel(id));
  };

  return (
    <li key={hotel._id} className={styles.card}>
      {isEditable ? (
        <EditHotelForm hotel={hotel} close={() => setIsEditable(false)} />
      ) : (
        <div className={styles.cardContent}>
          <div className={styles.fields}>
            <div className={styles.cardItem}>
              <span className={styles.itemKey}>Hotel ID:</span>
              <span className={styles.itemValue}>{hotel._id}</span>
            </div>
            <div className={styles.cardItem}>
              <span className={styles.itemKey}>Hotel Image:</span>
              <span className={styles.image}>
                <img src={hotel.image} alt="image"/>
              </span>
            </div>
          </div>
          <div className={styles.buttons}>
            <div onClick={() => setIsEditable(true)} className={styles.button}>
              <Button inverted={true} padding={'8px 15px'}>
                Edit
              </Button>
            </div>
            <div onClick={() => removeHotel(hotel._id)} className={styles.button}>
              <Button inverted={true} padding={'8px 15px'}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default HotelCard;
