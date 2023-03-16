import React, { useEffect, useMemo } from 'react';
import styles from './styles.module.scss';
import Loader from '../../UI/Loader';
import HotelCard from '../HotelCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectHotels } from '../../redux/store/selectors';
import { getAllHotels } from '../../redux/asyncActions/hotels';

const HotelCards = () => {
  const { hotels, loading } = useAppSelector(selectHotels);
  const dispatch = useAppDispatch();

  const hotelsCards = useMemo(
    () => hotels.map((hotel) => <HotelCard key={hotel._id} {...hotel} />),
    [hotels],
  );

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);

  return (
    <>
      {loading && <Loader />}
      <ul className={styles.cards}>{hotelsCards}</ul>
    </>
  );
};

export default HotelCards;
