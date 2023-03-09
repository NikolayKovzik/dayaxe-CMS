import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/User/User';
import { createUser, deleteUser, getAllUsers, updateUser } from '../asyncActions/users';

interface State {
  users: User[];
  loading: boolean;
  success: boolean;
  error: string | null;
}

export const initialState: State = {
  users: [],
  loading: false,
  success: false,
  error: null,
};

const onPending = (state: State) => {
  state.loading = true;
  state.success = false;
  state.error = null;
};

const isError = (action: AnyAction) => action.type.endsWith('rejected');

const onFulfilled = (state: State) => {
  state.loading = false;
  state.success = true;
};

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, { payload }: PayloadAction<User>) {
      state.users.push(payload);
    },
    updateUser(state, { payload }: PayloadAction<User>) {
      state.users = state.users.map((user) => {
        if (user._id !== payload._id) {
          return user;
        }

        return { ...payload };
      });
    },
    deleteUser(state, { payload }: PayloadAction<string>) {
      state.users = state.users.filter((user) => user._id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    });

    builder.addCase(createUser.pending, onPending);
    builder.addCase(createUser.fulfilled, onFulfilled);

    builder.addCase(updateUser.pending, onPending);
    builder.addCase(updateUser.fulfilled, onFulfilled);

    builder.addCase(deleteUser.pending, onPending);
    builder.addCase(deleteUser.fulfilled, onFulfilled);

    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const usersActions = users.actions;
export default users.reducer;
