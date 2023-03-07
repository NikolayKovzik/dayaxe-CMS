import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  _id: string
  username: string;
  password: string;
  email: string;
}

interface State {
  users: User[];
}

export const initialState: State = {
  users: [
    {
      _id: '1',
      username: 'username',
      password: 'password',
      email: 'email@mail.com',
    },
    {
      _id: '2',
      username: 'username',
      password: 'password',
      email: 'email@mail.com',
    },
    {
      _id: '3',
      username: 'username',
      password: 'password',
      email: 'email@mail.com',
    },
    {
      _id: '4',
      username: 'username',
      password: 'password',
      email: 'email@mail.com',
    },
  ],
};

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
});

export const usersActions = users.actions;
export default users.reducer;
