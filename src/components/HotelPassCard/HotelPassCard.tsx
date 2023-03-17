import React, { useState } from 'react';
import Button from '../../UI/Button';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { HotelPass } from '../../models/HotelPass/HotelPass';
import { deleteHotelPass } from '../../redux/asyncActions/hotel-passes';
import EditHotelPassForm from '../EditHotelPassForm';

const HotelPassCard = (hotelPass: HotelPass) => {
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useAppDispatch();

  const removeHotel = (id: string) => {
    dispatch(deleteHotelPass(id));
  };

  return (
    <li key={hotelPass._id} className={styles.card}>
      {isEditable ? (
        <EditHotelPassForm hotelPass={hotelPass} close={() => setIsEditable(false)} />
      ) : (
        <div className={styles.cardContent}>
          <div className={styles.fields}>
            {Object.entries(hotelPass).map(([key, value]) => {
              if (key === 'image') {
                return (
                  <div style={{ alignItems: 'flex-start' }} key={key} className={styles.cardItem}>
                    <span className={styles.itemKey}>{key}:</span>
                    <span className={styles.image}>
                      <img src={value} alt="image" />
                    </span>
                  </div>
                );
              }

              return (
                <div key={key} className={styles.cardItem}>
                  <span className={styles.itemKey}>{key === '_id' ? 'Hotel Pass ID' : key}:</span>
                  <span className={styles.itemValue}>{value}</span>
                </div>
              );
            })}
          </div>
          <div className={styles.buttons}>
            <div onClick={() => setIsEditable(true)} className={styles.button}>
              <Button inverted={true} padding={'8px 15px'}>
                Edit
              </Button>
            </div>
            <div onClick={() => removeHotel(hotelPass._id)} className={styles.button}>
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

export default HotelPassCard;
