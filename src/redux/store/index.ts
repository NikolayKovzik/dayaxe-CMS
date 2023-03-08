import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import users from '../slices/users';

export const rootReducer = combineReducers({
  users,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
