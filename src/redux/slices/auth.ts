import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse } from '../../models/Auth/authResponse';
import { User } from '../../models/User/User';
import { registerUser } from '../asyncActions/auth';

interface State {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export const initialState: State = {
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
  name: 'auth',
  initialState,
  reducers: {
    // addUser(state, { payload }: PayloadAction<User>) {
    //   state.users.push(payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
      state.loading = false;
      localStorage.setItem('DayaxeAuthToken', action.payload.token)
    });

    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const usersActions = users.actions;
export default users.reducer;