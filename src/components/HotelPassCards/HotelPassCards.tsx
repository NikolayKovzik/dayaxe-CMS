import React, { useEffect, useMemo } from 'react';
import styles from './styles.module.scss';
import Loader from '../../UI/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectHotelPasses } from '../../redux/store/selectors';
import { getAllHotelPasses } from '../../redux/asyncActions/hotel-passes';
import HotelPassCard from '../HotelPassCard';

const HotelPassCards = () => {
  const { hotelPasses, loading } = useAppSelector(selectHotelPasses);
  const dispatch = useAppDispatch();

  const hotelsCards = useMemo(
    () => hotelPasses.map((hotelPass) => <HotelPassCard key={hotelPass._id} {...hotelPass} />),
    [hotelPasses],
  );

  useEffect(() => {
    dispatch(getAllHotelPasses());
  }, []);

  return (
    <>
      {loading && <Loader />}
      <ul className={styles.cards}>{hotelsCards}</ul>
    </>
  );
};

export default HotelPassCards;
