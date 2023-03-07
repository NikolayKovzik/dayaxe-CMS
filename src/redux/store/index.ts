import { combineReducers, configureStore } from '@reduxjs/toolkit';
import users from '../slices/users';

export const rootReducer = combineReducers({
  users,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
