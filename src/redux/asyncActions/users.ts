import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../models/User/User';
import UserService from '../../http/services/UserService';
import { CreateUser } from '../../models/User/CreateUser';
import { UserAttributes } from '../../models/User/UserAttributes';
import { usersActions } from '../slices/users';

export const getAllUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
  'users/getAllUsers',
  async (_, { rejectWithValue }) => {
    const { data, status } = await UserService.getAllUsers();

    if (status !== 200) {
      return rejectWithValue('Server error!');
    }

    return data;
  },
);

export const getUserById = createAsyncThunk<User, string, { rejectValue: string }>(
  'users/getUserById',
  async (id, { rejectWithValue }) => {
    const { data, status } = await UserService.getUserById(id);

    if (status === 400) {
      return rejectWithValue('Bad Request');
    }

    if (status !== 200) {
      return rejectWithValue('Server Error');
    }

    return data;
  },
);

export const createUser = createAsyncThunk<void, CreateUser, { rejectValue: string }>(
  'users/createUser',
  async (body, { rejectWithValue, dispatch }) => {
    const { data, status } = await UserService.createUser(body);

    if (status === 400) {
      return rejectWithValue('Bad Request');
    }

    if (status !== 201) {
      return rejectWithValue('Server Error');
    }

    dispatch(usersActions.addUser(data));
  },
);

export const updateUser = createAsyncThunk<void, UserAttributes, { rejectValue: string }>(
  'users/updateUser',
  async (user, { rejectWithValue, dispatch }) => {
    const { id, ...body } = user;
    const { data, status } = await UserService.updateUser(id, body);

    if (status === 400) {
      return rejectWithValue('Bad Request');
    }

    if (status !== 200) {
      return rejectWithValue('Server Error');
    }

    dispatch(usersActions.updateUser(data));
  },
);

export const deleteUser = createAsyncThunk<void, string, { rejectValue: string }>(
  'users/deleteUser',
  async (id, { rejectWithValue, dispatch }) => {
    const { data, status } = await UserService.deleteUser(id);

    if (status === 400) {
      return rejectWithValue('Bad Request');
    }

    if (status !== 200) {
      return rejectWithValue('Server Error');
    }

    dispatch(usersActions.deleteUser(id));
  },
);
