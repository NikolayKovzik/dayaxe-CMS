import { RootState } from './index';

export const selectUsers = (state: RootState) => state.users;
export const selectAuth = (state: RootState) => state.auth;
export const selectHotels = (state: RootState) => state.hotels;
export const selectHotelPasses = (state: RootState) => state.hotelPasses;
