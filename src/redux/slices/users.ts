import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
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
      username: 'username',
      password: 'password',
      email: 'email@mail.com',
    },
    {
      username: 'username',
      password: 'password',
      email: 'email@mail.com',
    },
    {
      username: 'username',
      password: 'password',
      email: 'email@mail.com',
    },
    {
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
