import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import auth from '../slices/auth';
import users from '../slices/users';
import hotels from '../slices/hotels';
import hotelPasses from '../slices/hotel-passes';

export const rootReducer = combineReducers({
  users,
  auth,
  hotels,
  hotelPasses,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
